import { useLoaderData, Link} from "react-router-dom"
import { uniqueYearsFilter } from "../filters"

function ShowYears(props){
    const data = useLoaderData()
    const uniqueYears = uniqueYearsFilter(data)
    
    return (
    <div className="container">
        <div className="dropdown">
            <button className="dropbtn">Select Year</button>
            <div className = "dropdown-content">
                {uniqueYears.sort().map((element, index) => {
                    return <Link 
                    to = {`../showMonths/${element}`}
                    key = {index}
                    >{element}</Link>
                })}
            </div>
        </div>

    </div>
    )
}

export default ShowYears