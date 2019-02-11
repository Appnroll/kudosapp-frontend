import React, { Component } from 'react'
import Request from './Request'

export default class KudosRankingRequest extends Component {
    normalize = (ranking = []) =>
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
            >
                {
                    ({response, ...rest}) =>
                        this.props.children({...rest, response: this.normalize(response)})
                }
            </Request>
        )
    }
}
