import {getCurrentYear} from "./years";
const currentMonth = (new Date()).getMonth()
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

export const getMonthNameByIndex = index => months[index].name
export const getMonthIndexByAbbreviation = abbreviation => months.findIndex(month => month.abbreviation === abbreviation)
export const isCurrentMonth = month => month === currentMonth
export const isFutureMonth = (month, year = getCurrentYear()) => console.log(month, year) || year > getCurrentYear() || (year === getCurrentYear() && month > currentMonth)
