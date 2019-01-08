import React, { Component } from 'react';
import StatsList from "./StatsList";

class GiversStats extends Component {
    static getDerivedStateFromProps ({stats}) {
        if (!stats) {
            return null
        }
        return {
            stats: stats.map(({from, quantity}) => ({label: from, value: quantity}))
        }
    }
    state = {
        stats: []
    }
    render () {
        return (
            <StatsList stats={this.state.stats}/>
        )
    }
}

export default GiversStats
