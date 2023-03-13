import { uniqueMonthsFilter } from "./filters"

const URL = 'https://ahtestone.herokuapp.com/foods'
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//Our UI uses String month names but our backend uses
const YYYYMMFormat = (year, month) => {
    return `${year}-${(month<10)?`0${month}`:month}`
}

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

export const daysLoader = async({params}) => {
    const response = await fetch(URL)
    const data = await response.json()
    const yearMonthQuery =  YYYYMMFormat(params.year, monthNames.indexOf(params.month) + 1)
    const result = data.filter((element) => element.date.includes(yearMonthQuery))
    console.log(result)
    return result
}