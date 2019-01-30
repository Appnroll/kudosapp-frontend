import React, { Component } from 'react'
import Request, { RequestMaker } from './Request'

export default class KudosRankingRequest extends Component {
    static propTypes = RequestMaker.handlersPropTypes
    static defaultProps = RequestMaker.defaultProps

    handleResponse = ranking => {
        const normalizedRanking =
            ranking
                .sort(this.compare)
                .map(({totalPoints, user: {name}}) => ({label: name, value: totalPoints}))
        this.props.then(normalizedRanking)
    }

    handleError = error => {
        this.props.catch(error)
    }

    compare(a, b) {
        return b.totalPoints - a.totalPoints
    }

    render() {
        return (
            <Request
                authorized
                from='kudos/rankings'
                then={this.handleResponse}
                catch={this.handleError}
            />
        )
    }
}
