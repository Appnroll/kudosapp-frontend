import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Request, { RequestMaker } from './Request'

export default class KudosStatsRequest extends Component {
    static propTypes = {
        ...RequestMaker.handlersPropTypes,
        year: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired
    }

    static defaultProps = RequestMaker.defaultProps

    render() {
        return (
            <Request
                authorized
                params={{year: this.props.year, month: this.props.month}}
                from='kudos/from/:year/:month'
                then={this.props.then}
                catch={this.props.catch}
            />
        )
    }
}
