import {useLoaderData, Form} from 'react-router-dom'
import {uniqueMonthsFilter, uniqueYearsFilter} from '../filters'

function Index(props){
    const data = useLoaderData()

    const uniqueYears = uniqueYearsFilter(data)
    const uniqueMonths = uniqueMonthsFilter(data)
    console.log(uniqueMonths)
    return (<>
        <h1>Index COMPONENT</h1>
        <div className="dropdown">
            <button className="dropbtn">Select Month</button>
            <div className = "dropdown-content">
                {uniqueMonths.map((element, index) => {
                    return <div key = {index}>{element}</div>
                })}
            </div>
        </div>

    </>)

}

export default Index