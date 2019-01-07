import React, { Component } from 'react';
import {getKudosesGiversStats} from "../api/KudosApi";
import DateNavigation from "./DateNavigation";
import {getMonthIndexByAbbreviation, isCurrentMonth, isFutureMonth} from "../utils/months";
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
    renderNoStats (month, year) {
        if (isCurrentMonth(month)) {
            return <p>It's a fresh month. So many KUDOS are waiting to be given. You can even give one yourself!</p>
        } else if (isFutureMonth(month - 1, year)) {
            return <p>This month is in the future. It's full of possibilities. KUDOS will flow.</p>
        } else {
            return <p>This month, nobody gave a KUDO.</p>
        }
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
                        this.renderNoStats(month - 1, +year)
                }
            </div>
        )
    }
}

export default Givers
