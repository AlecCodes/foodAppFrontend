import { useLoaderData } from "react-router-dom"
import { uniqueYearsFilter } from "../filters"

function ShowYears(props){
    const data = useLoaderData()
    const uniqueYears = uniqueYearsFilter(data)
    
    return (
    <>
        <h1>Show YEARS COMPONENT</h1>
        <div className="dropdown">
            <button className="dropbtn">Select Year</button>
            <div className = "dropdown-content">
                {uniqueYears.map((element, index) => {
                    return <a 
                    href = {`ShowMonths/${element}`}
                    key = {index}
                    >{element}</a>
                })}
            </div>
        </div>

    </>
    )
}

export default ShowYears