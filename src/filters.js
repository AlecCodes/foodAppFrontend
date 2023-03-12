
export const uniqueYearsFilter = (data) => {
    const years = []
    data.forEach((element) => years.push(new Intl.DateTimeFormat("en-US", { year : "numeric" }).format(new Date(element.date))))

    function isUnique(element, index, arr){
        return arr.indexOf(element) === index
    }
    return years.filter(isUnique)


}

export const uniqueMonthsFilter = (data) => {
    const Months = []
    data.forEach((element) => Months.push(new Intl.DateTimeFormat("en-US", { month : "long" }).format(new Date(element.date))))

    function isUnique(element, index, arr){
        return arr.indexOf(element) === index
    }
    return Months.filter(isUnique)
}

