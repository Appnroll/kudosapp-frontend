import React, { Component } from 'react';
import DateNavigation from "./DateNavigation";
import { isCurrentMonth, isFutureMonth } from "../utils/months";
import GiversStats from "./GiversStats";
import styled from "styled-components";
import { isCurrentYear } from "../utils/years";
import KudosStatsRequest from './KudosStatsRequest'
import NetworkSpinner from './NetworkSpinner'
import withNetworking from './withNetworking'

class Givers extends Component {
    state = {
        stats: [],
    }

    renderNoStats(month, year) {
        if (isCurrentMonth(month) && isCurrentYear(year)) {
            return (
                <NoItemText>
                    It's a fresh month. So many KUDOS are waiting to be given. You can even give one yourself!
                    <span role="img" aria-label="sparkling heart">💖</span>
                </NoItemText>
            )
        } else if (isFutureMonth(month, year)) {
            return (
                <NoItemText>
                    This month is in the future. It's full of possibilities. KUDOS will flow.
                    <span role="img" aria-label="praying hands">🙏</span>
                </NoItemText>
            )
        } else {
            return (
                <NoItemText>
                    This month, nobody gave a KUDO.
                    <span role="img" aria-label="withered flower">🥀</span>
                </NoItemText>
            )
        }
    }

    renderStatsSection() {
        const {year, month} = this.props.match.params
        const currentStats = this.state.stats
        if (currentStats.length) {
            return <GiversStats stats={currentStats}/>
        } else {
            return this.renderNoStats(month - 1, +year)
        }
    }

    render() {
        const {year, month} = this.props.match.params
        return (
            <Container>
                <KudosStatsRequest year={year} month={month} then={stats => this.setState({stats, loading: false})}/>
                <DateNavigation currentYear={year} currentMonth={month}/>
                <NetworkSpinner/>
                {!this.props.networking.fetching && this.renderStatsSection()}
            </Container>
        )
    }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto;
`

const NoItemText = styled.p`
  margin: 5rem auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  line-height: 1.5;
  color: cornflowerblue;
`

export default withNetworking(Givers)
