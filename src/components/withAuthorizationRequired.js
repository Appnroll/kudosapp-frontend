import React, { Component } from 'react';
import Authorization from './Authorization'
import withAuthorization from './withAuthorization'

class Authorized extends Component {
    componentWillMount() {
        if (!this.props.authorization.authorized) {
            this.props.history.push(Authorization.rootPath)
        }
    }

    render() {
        return this.props.authorization.authorized ? this.props.children : null
    }
}

const OnlyAuthorized = withAuthorization(Authorized)

export default function withAuthorizationRequired(Component) {
    return routerProps =>
        <OnlyAuthorized {...routerProps}><Component {...routerProps}/></OnlyAuthorized>
}
