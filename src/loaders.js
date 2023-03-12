import { uniqueMonthsFilter } from "./filters"

const URL = 'https://ahtestone.herokuapp.com/foods'
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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
    console.log(params.year, params.month)
    data.forEach((element) => {
        const monthint = new Date(element.date).getMonth()
        console.log(monthint.toLocaleString('en-US', {month: 'long'}))

    })
//    const months = data.filter((element) => element.date.includes(`${params.year}`))
    return data
}