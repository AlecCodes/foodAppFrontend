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

export const uniqueMonthsFilter = (data) => {
    const Monthz = []
    data.forEach((element) =>  {
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
    //Below is the bug. The issue is that we're running a filter on the data, hence useloaderdata in the component returns our raw data, not an array of dates.
    const alldays = []
    data.forEach((element) => {
        if (element.date.includes(yearMonthQuery)){
            alldays.push(element.date)
        }
    })

//    const alldays = data.filter((element) => element.date.includes(yearMonthQuery))
    const uniqueDays = alldays.filter(isUnique)
    return uniqueDays
}
