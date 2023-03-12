import { uniqueMonthsFilter } from "./filters"

const URL = 'https://ahtestone.herokuapp.com/foods'

export const indexLoader = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export const monthLoader = async({params}) => {
    const response = await fetch(URL)
    const data = await response.json()
    return uniqueMonthsFilter(data.filter((element) => element.date.includes(`${params.year}`)))
}