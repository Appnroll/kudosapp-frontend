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
    calculateBar (points) {
        const bestScore = this.state.ranking[0].totalPoints
        return points > 0 ? (points / bestScore) * 100 : 0
    }
    render() {
        const { loading, ranking } = this.state
        return (
            loading ? <Spinner/> : <StatsList stats={ranking}/>
        );
    }
}

export default Stats;
