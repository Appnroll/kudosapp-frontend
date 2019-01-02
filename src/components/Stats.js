import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../constants/Colors'
import { getKudosesStats } from "../api/KudosApi";
import Spinner from "./Spinner";

class Stats extends Component {
    state = {
        ranking: [],
        loading: true
    }
    componentWillMount () {
        getKudosesStats()
            .then(ranking => ranking.sort(this.compare))
            .then(ranking => {
                this.setState({
                    ranking,
                    loading: false
                })
            })
    }
    compare(a, b) {
        if (a.totalPoints > b.totalPoints)
            return -1;
        else if (a.totalPoints < b.totalPoints)
            return 1;
        return 0;
    }
    calculateBar (points) {
        const bestScore = this.state.ranking[0].totalPoints
        return points > 0 ? (points / bestScore) * 100 : 0
    }
    render() {
        const { loading, ranking } = this.state
        return (
            loading ? <Spinner/> :
            <StyledList>
                {
                    ranking.map((kudos, index) =>
                        <li key={index}>
                            <Points>{kudos.totalPoints}</Points>
                            <Bar best={!index} height={this.calculateBar(kudos.totalPoints)}/>
                            <Name>{kudos.name}</Name>
                        </li>
                    )
                }
            </StyledList>
        );
    }
}

const StyledList = styled.ul`
   margin: 50px auto 0;
   display: flex;
   overflow-x: scroll;
   padding: 20px 20px 60px;
   li {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
   }
`
const Bar = styled.div`
  width: 100px;
  background: ${Colors.GlacierBlue};
  height: calc(${props => props.height}%);
  margin: 10px;
  position: relative;
`
const Points = styled.div`
  width: 100%;
  text-align: center;
`
const Name = styled.div`
  width: 100%;
  text-align: center;
`

export default Stats;