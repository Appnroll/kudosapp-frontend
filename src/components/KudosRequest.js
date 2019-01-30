import React, { Component } from 'react'
import Request, {RequestMaker} from './Request'

export default class KudosRequest extends Component {
    static propTypes = RequestMaker.handlersPropTypes
    static defaultProps = RequestMaker.defaultProps

    handleResponse = kudos => {
        const sortedKudos = kudos.reverse()
        this.props.then(sortedKudos)
    }

    handleError = error => {
        this.props.catch(error)
    }

    render() {
        return (
            <Request
                authorized
                from='kudos'
                then={this.handleResponse}
                catch={this.handleError}
            />
        )
    }
}
