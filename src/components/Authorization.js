import React, { Component, createContext } from 'react';
import { withRouter } from "react-router-dom";
import createStoreAccess from '../utils/createStoreAccess'

const AuthorizationContext = createContext(null)

class Authorization extends Component {
    // Store key names.
    static tokenStorageName = 'token'
    static userStorageName = 'user'

    // Query params passed from the API during login.
    static authTokenParamName = 'token'
    static authUserParamName = 'name'
    static authUserIdName = 'id'

    // The path where user is redirected from the back-end with credentials attached.
    static loginPath = '/login'

    // Where logged user will end up.
    static entryPath = '/wall'

    // Where it all begins.
    static rootPath = '/'

    // And where everything will end.
    static logoutPath = '/logout'

    // Authorization context consumer.
    static Consumer = AuthorizationContext.Consumer

    storage = createStoreAccess('auth')

    state = {
        // State of the context passed to consumers.
        context: {
            authorized: false,
            token: null,
            userId: null,
            userName: null,
        }
    }

    get currentPath() {
        return this.props.location.pathname
    }

    componentWillMount() {
        const paramToken = this.getTokenFromParams()
        const currentToken = this.getTokenFromStorage()

        if (currentToken) {
            this.startFromStoredData()
        } else if (this.isAtLogin() && paramToken) {
            this.startSessionFromAPIInfo()
        }
    }

    componentWillReceiveProps({location}) {
        if (location.pathname === Authorization.logoutPath) {
            this.endSession()
        }
    }

    render() {
        return (
            <AuthorizationContext.Provider value={this.state.context}>
                {this.props.children}
            </AuthorizationContext.Provider>
        )
    }

    startFromStoredData() {
        const currentToken = this.getTokenFromStorage()
        const storedUser = this.getUserFromStorage()
        try {
            const user = JSON.parse(storedUser)
            if (this.isUserValid(user)) {
                this.setCredentials({token: currentToken, ...user})
                if (this.isAtLogin() || this.isAtRoot()) {
                    this.navigateIn()
                }
            } else {
                this.handleInvalidUserData()
            }
        } catch (error) {
            this.handleInvalidUserData()
        }
    }

    startSessionFromAPIInfo() {
        if (!this.areParamsValid()) {
            return this.handleInvalidUserData()
        }
        const token = this.getTokenFromParams()
        const user = this.getUserFromParams()

        try {
            this.storeSessionInfo({token, ...user})
        } catch (error) {
            this.handleInvalidUserData()
        }

        this.setCredentials({token, ...user})
        this.navigateIn()
    }

    endSession() {
        this.clearStoredData()
        this.unsetCredentials()
        this.navigateToRoot()
    }

    setCredentials({token, name, id}) {
        this.setState(state => ({
            context: {
                ...state.context,
                token,
                authorized: Boolean(token),
                userName: name,
                userId: id,
            }
        }))
    }

    unsetCredentials() {
        this.setCredentials({token: null, name: null, id: null})
    }

    isUserValid({name, id} = {}) {
        return Boolean(name && id)
    }

    areParamsValid() {
        return [...this.getParams().values()].reduce((outcome, param) => outcome && Boolean(param), true)
    }

    informAboutMalformedUserData() {
        alert(`User data is invalid. You'll have to log in again.`)
    }

    handleInvalidUserData() {
        this.clearStoredData()
        this.informAboutMalformedUserData()
    }

    navigateIn() {
        this.props.history.push(Authorization.entryPath)
    }

    navigateToRoot() {
        this.props.history.push(Authorization.rootPath)
    }

    storeSessionInfo({token, ...user}) {
        this.storage.setItem(Authorization.tokenStorageName, token)
        this.storage.setItem(Authorization.userStorageName, JSON.stringify(user))
    }

    getTokenFromStorage() {
        return this.storage.getItem(Authorization.tokenStorageName)
    }

    getUserFromStorage() {
        return this.storage.getItem(Authorization.userStorageName)
    }

    clearStoredData() {
        this.storage.removeItem(Authorization.userStorageName)
        this.storage.removeItem(Authorization.tokenStorageName)
    }

    getParams() {
        return new URLSearchParams(this.props.location.search)
    }

    getTokenFromParams() {
        return this.getParams().get(Authorization.authTokenParamName)
    }

    getUserFromParams() {
        const params = this.getParams()
        return {
            name: params.get(Authorization.authUserParamName),
            id: params.get(Authorization.authUserIdName)
        }
    }

    isAtRoot() {
        return this.currentPath === Authorization.rootPath
    }

    isAtLogin() {
        return this.currentPath === Authorization.loginPath
    }
}

export default withRouter(Authorization)
