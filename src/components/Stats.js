import React, { Component } from 'react';
import StatsList from "./StatsList";
import KudosRankingRequest from './KudosRankingRequest'
import NetworkSpinner from './NetworkSpinner'

class Stats extends Component {
    render() {
        return (
            <KudosRankingRequest>
                {
                    ({response}) => (
                        <>
                            <NetworkSpinner/>
                            <StatsList stats={response}/>
                        </>
                    )
                }
            </KudosRankingRequest>
        );
    }
}

export default Stats;
