import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Request, { RequestMaker } from './Request'

export default class KudosRequest extends Component {
    static propTypes = {
        ...RequestMaker.handlersPropTypes,
        page: PropTypes.number
    }

    static defaultProps = {
        ...RequestMaker.defaultProps,
        page: 0
    }

    static getDerivedStateFromProps(props, state) {
        if (props.page !== state.page) {
            return {
                page: props.page
            }
        } else {
            return null
        }
    }

    state = {
        page: 0,
    }

    normalize = response => ({
        ...response,
        kudos: response.data.reverse()
    })

    render() {
        return (
            <Request
                authorized
                from='kudos'
                query={this.state}
                then={response => this.props.then(this.normalize(response))}
                catch={this.props.catch}
            />
        )
    }
}
