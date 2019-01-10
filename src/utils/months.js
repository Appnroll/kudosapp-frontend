import {getCurrentYear} from "./years";
const currentMonth = (new Date()).getMonth()
const monthsNames = (() => {
    const date = new Date()
    return Array(12)
        .fill(0)
        .map((value, index) => {
            date.setMonth(index)
            return date.toLocaleDateString('en', {month: 'long'})
        })
})()
const TEMP_monthsWithAbbreviations = [
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

export const getMonthsNames = () => monthsNames.slice()
export const getCurrentMonth = () => currentMonth
export const getMonthIndexByAbbreviation = abbreviation => TEMP_monthsWithAbbreviations.findIndex(month => month.abbreviation === abbreviation)
export const isCurrentMonth = month => month === currentMonth
export const isFutureMonth = (month, year = getCurrentYear()) => year > getCurrentYear() || (year === getCurrentYear() && month > currentMonth)
