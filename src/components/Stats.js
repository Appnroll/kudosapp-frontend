import React, { Component } from 'react';
import { getKudosesStats } from "../api/KudosApi";
import Spinner from "./Spinner";
import StatsList from "./StatsList";

class Stats extends Component {
    state = {
        ranking: [],
        loading: true
    }
    componentDidMount () {
        getKudosesStats()
            .then(ranking => ranking.sort(this.compare))
            .then(ranking => {
                this.setState({
                    ranking: ranking.map(({totalPoints, name}) => ({label: name, value: totalPoints})),
                    loading: false
                })
            })
    }
    compare(a, b) {
        return b.totalPoints - a.totalPoints
    }
    render() {
        const { loading, ranking } = this.state
        return (
            loading ? <Spinner/> : <StatsList stats={ranking}/>
        );
    }
}

export default Stats;
