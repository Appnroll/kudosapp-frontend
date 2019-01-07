import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Colors from "../constants/Colors";

const months = [
    {
        "abbreviation": "Jan",
        "name": "January"
    },
    {
        "abbreviation": "Feb",
        "name": "February"
    },
    {
        "abbreviation": "Mar",
        "name": "March"
    },
    {
        "abbreviation": "Apr",
        "name": "April"
    },
    {
        "abbreviation": "May",
        "name": "May"
    },
    {
        "abbreviation": "Jun",
        "name": "June"
    },
    {
        "abbreviation": "Jul",
        "name": "July"
    },
    {
        "abbreviation": "Aug",
        "name": "August"
    },
    {
        "abbreviation": "Sep",
        "name": "September"
    },
    {
        "abbreviation": "Oct",
        "name": "October"
    },
    {
        "abbreviation": "Nov",
        "name": "November"
    },
    {
        "abbreviation": "Dec",
        "name": "December"
    }
]

class DateNavigation extends Component {
    render() {
        const {currentYear, currentMonth} = this.props
        return (
            <nav>
                <ul>
                    {
                        ['2018', '2019'].map(year =>
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
                                    {months[index].name}
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
