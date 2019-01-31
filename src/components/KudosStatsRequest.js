import React, { Component } from 'react'
import Request, { RequestMaker } from './Request'
import { getMonthIndexByAbbreviation } from '../utils/months'

export default class KudosStatsRequest extends Component {
    static propTypes = RequestMaker.handlersPropTypes
    static defaultProps = RequestMaker.defaultProps

    normalize = stats =>
        stats.reduce((acc, {year, month, from, quantity}) => {
            // TODO: when API changes returned data, this will have to change.
            const monthIndex = getMonthIndexByAbbreviation(month)
            if (!acc[year]) {
                acc[year] = {}
            }
            if (!acc[year][monthIndex]) {
                acc[year][monthIndex] = []
            }
            acc[year][monthIndex].push({from, quantity: Number(quantity)})
            return acc
        }, {})

    render() {
        return (
            <Request
                authorized
                from='kudos/from'
                then={response => this.props.then(this.normalize(response))}
                catch={this.props.catch}
            />
        )
    }
}
