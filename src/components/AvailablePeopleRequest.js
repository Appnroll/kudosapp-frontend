import React, { Component } from 'react'
import Request from './Request'

export default class AvailablePeopleRequest extends Component {
    render() {
        return (
            <Request
                authorized
                from='availability'
            >
                {
                    ({response, ...rest}) =>
                        this.props.children({...rest, response})
                }
            </Request>
        )
    }
}
