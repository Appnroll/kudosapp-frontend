import { Component } from 'react';
import PropTypes from 'prop-types'
import withAuthorization from './withAuthorization'
import withNetworking from './withNetworking'

class RequestMaker extends Component {
    static propTypes = {
        // Endpoint's path.
        from: PropTypes.string.isRequired,

        // Inform about the required authorization.
        authorized: PropTypes.bool,

        // Query params that will be added
        query: PropTypes.object,

        // Params that will be used to construct URL.
        params: PropTypes.object,

        // Callback executed after the network succeeds.
        then: PropTypes.func,

        // Callback executed after the network requests ends, no matte the result.
        finally: PropTypes.func,
    }

    static defaultProps = {
        then: () => undefined,
        finally: () => undefined,
    }

    static get endpoint() {
        return process.env.REACT_APP_API_URL
    }

    state = {
        loading: false,
        error: null,
    }

    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
            const {params, query} = this.props
            this.fetch({query, params})
        }
    }

    componentDidMount() {
        this.fetch({query: this.props.query, params: this.props.params})
    }

    componentWillUnmount() {
        this.cancel()
    }

    render() {
        if (this.state.error) {
            throw this.state.error
        }
        return this.props.children ? this.props.children(this.state) : null
    }

    fetch({query, params}) {
        const {authorized, authorization, networking, from} = this.props

        if (authorized && !authorization.authorized) {
            const error = {
                status: 403,
                error: 'Forbidden',
                message: 'Trying to make an authorized request without credentials.'
            }
            this.setState({error, loading: false})
            return
        }

        const headers = {
            ...authorized && {Authorization: `Bearer ${authorization.token}`}
        }

        if (from) {
            this.setState({loading: true})
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
                .then(response => this.setState({loading: false, response}))
                .then(response => this.props.then(response))
                .catch(error => this.setState({loading: false, error}))
                .finally(() => {
                    networking.end()
                    this.props.finally()
                })
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
