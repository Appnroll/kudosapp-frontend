import { Component } from 'react';
import PropTypes from 'prop-types'
import withAuthorization from './withAuthorization'

export class RequestMaker extends Component {
    static handlersPropTypes = {
        // Successful response handler.
        then: PropTypes.func,

        // Error handler.
        catch: PropTypes.func,
    }

    static propTypes = {
        // Endpoint's path.
        from: PropTypes.string.isRequired,

        // Inform about the required authorization.
        authorized: PropTypes.bool,

        // Result handlers.
        ...Request.handlersPropTypes
    }

    static defaultProps = {
        then: () => undefined,
        catch: () => undefined
    }

    static get endpoint() {
        return 'https://kudosapp-staging.herokuapp.com/'
    }

    state = {
        inProgress: false,
        done: false,
    }

    componentDidMount() {
        const {authorized, authorization, from, then: handleResponse, catch: handleError} = this.props

        if (authorized && !authorization.authorized) {
            handleError({
                statusCode: 403,
                error: 'Forbidden',
                message: 'Trying to make an authorized request without credentials.'
            })
        }

        const headers = {
            ...authorized && {Authorization:  `Bearer ${authorization.token}`}
        }

        if (from) {
            fetch(RequestMaker.endpoint + from, {headers})
                .then(response => response.json())
                .then(response => {
                    if (response.status < 400) {
                        handleResponse(response)
                    } else {
                        throw response
                    }
                })
                .catch(handleError)
        }
    }

    render() {
        return null
    }
}

export default withAuthorization(RequestMaker)
