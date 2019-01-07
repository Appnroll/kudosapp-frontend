import React, { Component } from 'react';

class GiversStats extends Component {
    render() {
        const { stats } = this.props
        return (
            <pre>
                {JSON.stringify(stats, null, 4)}
            </pre>
        )
    }
}

export default GiversStats
