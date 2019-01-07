import React, { Component } from 'react';
import {getKudosesGiversStats} from "../api/KudosApi";
import DateNavigation from "./DateNavigation";
import {getMonthIndexByAbbreviation, isFutureMonth} from "../utils/months";
import GiversStats from "./GiversStats";

class Givers extends Component {
    state = {
        stats: {}
    }
    componentDidMount () {
        getKudosesGiversStats()
            .then(stats => this.storeStats(stats))
    }
    storeStats (stats) {
        const parsed = stats.reduce((acc, {year, month, from, quantity}) => {
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
        this.setState({stats: parsed})
    }
    render () {
        const {year, month} = this.props.match.params
        const currentStats = this.state.stats[year] && this.state.stats[year][month - 1]
        return (
            <div>
                <DateNavigation currentYear={year} currentMonth={month}/>
                {
                    currentStats ?
                        <GiversStats stats={currentStats}/> :
                        isFutureMonth(month - 1, +year) ?
                            <p>This month is in the future. KUDOS will flow.</p> :
                            <p>This month, nobody gave a KUDO.</p>
                }
            </div>
        )
    }
}

export default Givers
