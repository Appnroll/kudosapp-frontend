// When the app started.
const baseYear = 2018
const currentYear = (new Date()).getFullYear()

const years = Array(currentYear - baseYear + 1)
    .fill(0)
    .map((value, index) => baseYear + index)

export const getYears = () => years
export const getCurrentYear = () => currentYear
export const isCurrentYear = year => year === currentYear
