import React, { Component } from 'react';
import styled from "styled-components";
import Colors from "../constants/Colors";

class StatsList extends Component {
    static getDerivedStateFromProps({stats}) {
        return {
            top: stats.reduce((top, {value}) => value > top ? value : top, 0)
        }
    }
    state = {
        top: 0
    }
    calculateBar (points) {
        const bestScore = this.state.top
        return points > 0 ? (points / bestScore) * 100 : 0
    }
    render () {
        const { stats } = this.props
        return (
            <StyledList>
                {
                    stats.map(({value, label}, index) =>
                        <li key={index}>
                            <Points>{value}</Points>
                            <Bar best={value === this.state.top} height={this.calculateBar(value)}/>
                            <Label title={label}>{label}</Label>
                        </li>
                    )
                }
            </StyledList>
        )
    }
}

const StyledList = styled.ul`
  margin: 50px auto 0;
  display: flex;
  overflow-x: scroll;
  padding: 20px 20px 60px;
  li {
    height: 50vh;
    width: 100px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-shrink: 0;
  }
`

const Bar = styled.div`
  background: ${Colors.GlacierBlue};
  height: ${props => props.height}%;
  margin: 10px 0;
  position: relative;
`

const Points = styled.div`
  width: 100%;
  text-align: center;
`

const Label = styled.div`
  width: 100%;
  text-align: center;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
`

export default StatsList
