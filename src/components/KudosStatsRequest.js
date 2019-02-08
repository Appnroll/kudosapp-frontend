import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Request from './Request'

export default class KudosStatsRequest extends Component {
    static propTypes = {
        year: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired
    }

    render() {
        return (
            <Request
                authorized
                params={{year: this.props.year, month: this.props.month}}
                from='kudos/from/:year/:month'
            >
                {
                    ({response, ...rest}) =>
                        this.props.children({...rest, response})
                }
            </Request>
        )
    }
}
