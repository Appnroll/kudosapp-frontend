import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Colors from "../constants/Colors";
import { getMonthNameByIndex } from "../utils/months";
import {getYears} from "../utils/years";

class DateNavigation extends Component {
    render () {
        const { currentYear, currentMonth } = this.props
        return (
            <nav>
                <ul>
                    {
                        getYears().map(year =>
                            <li key={year}>
                                <NavLink to={`${process.env.PUBLIC_URL}/stats/givers/${year}/${currentMonth}`}
                                         activeStyle={{color: Colors.Banana}} key={year}>
                                    {year}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
                <ul>
                    {
                        Array(12).fill(0).map((month, index) =>
                            <li key={index}>
                                <NavLink to={`${process.env.PUBLIC_URL}/stats/givers/${currentYear}/${index + 1}`}
                                         activeStyle={{color: Colors.Banana}}>
                                    {getMonthNameByIndex(index)}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </nav>
        )
    }
}

export default DateNavigation
