import React, { Component } from 'react';
import StatsList from "./StatsList";
import KudosRankingRequest from './KudosRankingRequest'
import NetworkSpinner from './NetworkSpinner'

class Stats extends Component {
    state = {
        ranking: [],
    }

    render() {
        const {ranking} = this.state
        return (
            <>
                <KudosRankingRequest then={ranking => this.setState({ranking, loading: false})}/>
                <NetworkSpinner/>
                <StatsList stats={ranking}/>
            </>
        );
    }
}

export default Stats;
