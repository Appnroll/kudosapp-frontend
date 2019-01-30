import React, { Component } from 'react';
import Spinner from "./Spinner";
import StatsList from "./StatsList";
import KudosRankingRequest from './KudosRankingRequest'

class Stats extends Component {
    state = {
        ranking: [],
        loading: true
    }

    render() {
        const {loading, ranking} = this.state
        return (
            <>
                <KudosRankingRequest then={ranking => this.setState({ranking, loading: false})}/>
                {loading ? <Spinner/> : <StatsList stats={ranking}/>}
            </>
        );
    }
}

export default Stats;
