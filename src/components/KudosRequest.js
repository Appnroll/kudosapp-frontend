import React, { Component } from 'react'
import Request, { RequestMaker } from './Request'

export default class KudosRequest extends Component {
    static propTypes = RequestMaker.handlersPropTypes
    static defaultProps = RequestMaker.defaultProps

    normalize = kudos =>
        kudos.reverse()

    render() {
        return (
            <Request
                authorized
                from='kudos'
                then={response => this.props.then(this.normalize(response))}
                catch={this.props.catch}
            />
        )
    }
}
