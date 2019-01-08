import React, { Component } from 'react';
import { getKudosesGiversStats } from "../api/KudosApi";
import DateNavigation from "./DateNavigation";
import { getMonthIndexByAbbreviation, isCurrentMonth, isFutureMonth } from "../utils/months";
import GiversStats from "./GiversStats";
import styled from "styled-components";
import {isCurrentYear} from "../utils/years";
import Spinner from "./Spinner";

class Givers extends Component {
    state = {
        stats: {},
        loading: true
    }
    componentDidMount () {
        getKudosesGiversStats()
            .then(stats => this.storeStats(stats))
            .then(() => this.setState({loading: false}))
    }
    storeStats (stats) {
        const parsed = stats.reduce((acc, {year, month, from, quantity}) => {
            // TODO: when API changes returned data, this will have to change.
            const monthIndex = getMonthIndexByAbbreviation(month)
            if (!acc[year]) {
                acc[year] = {}
            }
            if (!acc[year][monthIndex]) {
                acc[year][monthIndex] = []
            }
            acc[year][monthIndex].push({from, quantity: Number(quantity)})
            return acc
        }, {})
        this.setState({stats: parsed})
    }
    renderNoStats (month, year) {
        if (isCurrentMonth(month) && isCurrentYear(year)) {
            return (
                <NoItemText>
                    It's a fresh month. So many KUDOS are waiting to be given. You can even give one yourself!
                    <span>💖</span>
                </NoItemText>
            )
        } else if (isFutureMonth(month, year)) {
            return (
                <NoItemText>
                    This month is in the future. It's full of possibilities. KUDOS will flow.
                    <span>🙏</span>
                </NoItemText>
            )
        } else {
            return (
                <NoItemText>
                    This month, nobody gave a KUDO.
                    <span>🥀</span>
                </NoItemText>
            )
        }
    }
    renderStatsSection () {
        const {year, month} = this.props.match.params
        const currentStats = this.state.stats[year] && this.state.stats[year][month - 1]
        if (currentStats) {
            return <GiversStats stats={currentStats}/>
        } else {
            return this.renderNoStats(month - 1, +year)
        }
    }
    render () {
        const {year, month} = this.props.match.params
        const currentStats = this.state.stats[year] && this.state.stats[year][month - 1]
        return (
            <div>
                <DateNavigation currentYear={year} currentMonth={month}/>
                {
                    this.state.loading ? <Spinner/> : this.renderStatsSection()
                }
            </div>
        )
    }
}

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

export default Givers
