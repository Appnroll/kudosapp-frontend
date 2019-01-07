import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Colors from "../constants/Colors";
import { getMonthNameByIndex } from "../utils/months";
import { getYears } from "../utils/years";

class DateNavigation extends Component {
    render () {
        const { currentYear, currentMonth } = this.props
        return (
            <Navigation>
                <List>
                    {
                        getYears().map(year =>
                            <Item key={year}>
                                <NavLink to={`${process.env.PUBLIC_URL}/stats/givers/${year}/${currentMonth}`}
                                         activeStyle={{color: Colors.Banana}} key={year}>
                                    {year}
                                </NavLink>
                            </Item>
                        )
                    }
                </List>
                <List supplementary>
                    {
                        Array(12).fill(0).map((month, index) =>
                            <Item key={index}>
                                <NavLink to={`${process.env.PUBLIC_URL}/stats/givers/${currentYear}/${index + 1}`}
                                         activeStyle={{color: Colors.Banana}}>
                                    {getMonthNameByIndex(index)}
                                </NavLink>
                            </Item>
                        )
                    }
                </List>
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
  margin: 2rem 0;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  font-size: ${props => props.supplementary ? 1.2 : 1.5}rem;
`

const Item = styled.li`
  padding: .5em;
`

export default DateNavigation
