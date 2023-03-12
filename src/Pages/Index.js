import {useLoaderData} from 'react-router-dom'


function Index(props){
    const data = useLoaderData()
    const months = []
    //grab month string from parsed date str
    data.forEach((element) => months.push(new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(element.date))))
    console.log(months)

    //grab only unique months
    function isUnique(element, index, arr){
        return arr.indexOf(element) === index
    }
    const uniqueMonths = months.filter(isUnique)

    console.log(uniqueMonths)
    return <h1>Index COMPONENT</h1>
}

export default Index