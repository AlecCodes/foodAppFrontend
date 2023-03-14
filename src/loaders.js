import { uniqueMonthsFilter, uniqueYearsFilter, uniqueDaysFilter } from "./filters"

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
    return uniqueMonthsFilter(data.filter((element) => {
        if (element.date.includes(`${params.year}`)){
            return element
        }

    }))
}

export const daysLoader = async({params}) => {
    const response = await fetch(URL)
    const data = await response.json()
    return uniqueDaysFilter(data, params.year, params.month)
}