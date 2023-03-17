const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function isUnique(element, index, arr){
    return arr.indexOf(element) === index
}


export const uniqueYearsFilter = (data) => {
    const years = []
    data.forEach((element) => years.push(new Intl.DateTimeFormat("en-US", { year : "numeric" }).format(new Date(element.date))))
    return years.filter(isUnique) 
}

//Show all months per year in db
export const uniqueMonthsFilter = (data, year) => {

    const yearData = data.filter((element) => {
        if (element.date.includes(year)){
            return element
        }
    })

    //Grab the month number and match it to month name, add this into Monthz arr
    const Monthz = []
    yearData.forEach((element) =>  {
        const monthNum = Number(element.date.slice(5,7)) - 1
        Monthz.push(monthNames[monthNum])
    })
    return Monthz.filter(isUnique)
}



//SHow only unique days - breakdown for each day should be next page
export const uniqueDaysFilter = (data, year, month) => {
 
    const YYYYMMFormat = (year, month) => {
        return `${year}-${(month<10)?`0${month}`:month}`
    }


    //get YYYY-MM format so can filter for days of a given month
    const yearMonthQuery =  YYYYMMFormat(year, monthNames.indexOf(month) + 1)
    const alldays = []
    data.forEach((element) => {
        if (element.date.includes(yearMonthQuery)){
            alldays.push(element.date)
        }
    })


    const uniqueDays = alldays.filter(isUnique)
    return uniqueDays
}

export const dayFilter = (data, day) => {
    return data.filter((element) => element.date === day)
}