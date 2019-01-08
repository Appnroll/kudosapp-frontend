import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from "react-router-dom";
import Colors from "../constants/Colors";
import { getMonthsNames, isCurrentMonth } from "../utils/months";
import { getBaseYear, getCurrentYear, getYears, isCurrentYear } from "../utils/years";

class DateNavigation extends Component {
    isMonthCurrent(month) {
        const {currentYear} = this.props
        return isCurrentMonth(month) && isCurrentYear(+currentYear)
    }
    createUrl (month, year) {
        return `${process.env.PUBLIC_URL}/stats/givers/${year}/${month}`
    }
    createPrevLink (currentMonth, currentYear) {
        const month = currentMonth === 1 ? 12 : currentMonth - 1
        const year = currentMonth === 1 ? currentYear - 1 : currentYear
        return year < getBaseYear() ? '' : this.createUrl(month, year)
    }
    createNextLink (currentMonth, currentYear) {
        const month = currentMonth === 12 ? 1 : currentMonth + 1
        const year = currentMonth === 12 ? currentYear + 1 : currentYear
        return year > getCurrentYear() ? '' : this.createUrl(month, year)
    }
    render () {
        const {currentYear, currentMonth} = this.props
        return (
            <Navigation>
                <LeftDirectionalButton to={this.createPrevLink(+currentMonth, +currentYear)}/>
                <Dates>
                    <YearsList>
                        {
                            getYears().map(year =>
                                <Item key={year}>
                                    <NavLink to={this.createUrl(currentMonth, year)}
                                             activeStyle={{color: Colors.Banana}} key={year}>
                                        {year}
                                    </NavLink>
                                </Item>
                            )
                        }
                    </YearsList>
                    <MonthsSelect>
                        {
                            getMonthsNames().map((monthName, month) =>
                                <option key={month}>{monthName}{this.isMonthCurrent(month) ? ' (current)' : ''}</option>
                            )
                        }
                    </MonthsSelect>
                    <MonthsList>
                        {
                            getMonthsNames().map((monthName, month) =>
                                <Item key={month} current={this.isMonthCurrent(month)}>
                                    <NavLink to={this.createUrl(month + 1, currentYear)}
                                             activeStyle={{color: Colors.Banana}}>
                                        {monthName}
                                    </NavLink>
                                </Item>
                            )
                        }
                    </MonthsList>
                </Dates>
                <RightDirectionalButton to={this.createNextLink(+currentMonth, +currentYear)}/>
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Dates = styled.div`
  display: flex;
  flex-direction: column;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
`

const YearsList = styled(List)`
  font-size: 1.5rem
`

const MonthsList = styled(List)`
  font-size: 1.2rem;
  @media screen and (max-width: 1099px) {
    display: none;
  }
`

const MonthsSelect = styled.select`
  @media screen and (min-width: 1100px) {
    display: none;
  }
`

const Item = styled.li`
  padding: .5em;
  ${props =>
    props.current ? css`
      position: relative;
      &:after {
        content: '⭐️';
        position: absolute;
        top: -5px;
        left: calc(50% - 6px);
        font-size: 0.6em;
      }
    ` : ''
    }
`

const DirectionalButton = styled(NavLink).attrs({
    disabled: props => !props.to
})`
  margin-top: 50px;
  width: 30px;
  height: 30px;
  display: block;
  border-color: ${Colors.Banana};
  border-style: solid;
  border-width: 0 0 5px 5px;
  transition: opacity 250ms;
  border-radius: 5px;
  ${props => props.disabled && css`
    opacity: .5;
    pointer-events: none;
  `};
`

const LeftDirectionalButton = styled(DirectionalButton)`
  transform: rotate(45deg)
`

const RightDirectionalButton = styled(DirectionalButton)`
  transform: rotate(-135deg)
`

export default DateNavigation
