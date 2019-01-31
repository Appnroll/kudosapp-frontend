import React, { Component } from 'react'
import Request, { RequestMaker } from './Request'

export default class KudosRankingRequest extends Component {
    static propTypes = RequestMaker.handlersPropTypes
    static defaultProps = RequestMaker.defaultProps

    normalize = ranking =>
        ranking
            .sort(this.compare)
            .map(({totalPoints, user: {name}}) => ({label: name, value: totalPoints}))

    compare(a, b) {
        return b.totalPoints - a.totalPoints
    }

    render() {
        return (
            <Request
                authorized
                from='kudos/rankings'
                then={response => this.props.then(this.normalize(response))}
                catch={this.props.catch}
            />
        )
    }
}
