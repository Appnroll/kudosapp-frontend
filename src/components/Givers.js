import React, { Component } from 'react';
import {getKudosesGiversStats} from "../api/KudosApi";
import DateNavigation from "./DateNavigation";


class Givers extends Component {
    state = {
        stats: {}
    }
    componentDidMount () {
        getKudosesGiversStats()
            .then(this.storeStats)
    }
    storeStats (stats) {
        console.log(stats);
    }
    render () {
        const {year, month} = this.props.match.params
        return (
            <div>
                <DateNavigation currentYear={year} currentMonth={month}/>
            </div>
        )
    }
}

export default Givers
