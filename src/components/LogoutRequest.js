import React, { Component } from 'react'
import Request  from './Request'

export default class LogoutRequest extends Component {
    render() {
        return (
            <Request
                authorized
                from='slack/logout'
                {...this.props}
            />
        )
    }
}
