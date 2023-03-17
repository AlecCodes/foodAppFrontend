import { uniqueMonthsFilter, uniqueDaysFilter } from "./filters"

const URL = 'https://ahtestone.herokuapp.com/foods'


export const indexLoader = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export const monthLoader = async({params}) => {
    const response = await fetch(URL)
    const data = await response.json()
    return uniqueMonthsFilter(data, params.year)
}

export const daysLoader = async({params}) => {
    const response = await fetch(URL)
    const data = await response.json()
    return uniqueDaysFilter(data, params.year, params.month)
}