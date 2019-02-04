import { Component } from 'react';
import PropTypes from 'prop-types'
import withAuthorization from './withAuthorization'
import withNetworking from './withNetworking'

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

        // Query params that will be added
        query: PropTypes.object,

        // Params that will be used to construct URL.
        params: PropTypes.object,

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

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.query !== nextProps.query) {
            this.fetch({query: nextProps.query, params: nextProps.params})
        }
    }

    componentDidMount() {
        this.fetch({query: this.props.query, params: this.props.params})
    }

    componentWillUnmount() {
        this.cancel()
    }

    render() {
        return null
    }

    fetch({query, params}) {
        const {authorized, authorization, networking, from, then: handleResponse, catch: handleError} = this.props

        if (authorized && !authorization.authorized) {
            handleError({
                statusCode: 403,
                error: 'Forbidden',
                message: 'Trying to make an authorized request without credentials.'
            })
        }

        const headers = {
            ...authorized && {Authorization: `Bearer ${authorization.token}`}
        }

        if (from) {
            this.controller = new AbortController()
            networking.initiate()
            fetch(this.createUrl({path: from, query, params}), {headers, signal: this.controller.signal})
                .then(response => {
                    if (response.status < 400) {
                        return response.json()
                    } else {
                        throw response
                    }
                })
                .then(handleResponse)
                .catch(handleError)
                .finally(networking.end)
        }
    }

    cancel() {
        if (this.controller) {
            this.controller.abort()
        }
    }

    createUrl({path, query, params}) {
        const address =
            Object.entries(params || {})
                .reduce((fullUrl, [param, value]) =>
                    fullUrl.replace(`:${param}`, value), RequestMaker.endpoint + path
                )
        const url = new URL(address)
        url.search = new URLSearchParams(query)
        return url
    }
}

export default withNetworking(withAuthorization(RequestMaker))
