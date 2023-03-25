import {useLoaderData, useParams, Link} from 'react-router-dom'

function ShowMonths(props, {params}){
    const uniqueMonths = useLoaderData()
    const {year} = useParams();
    return (<>
        <h1>Index COMPONENT</h1>
        <div className="dropdown">
            <button className="dropbtn">Select Month</button>
            <div className = "dropdown-content">
                {uniqueMonths.map((element, index) => {
                    return <Link 
                    to = {`../showDays/${year}/${element}`}
                    key = {index}>{element}</Link>
                })}
            </div>
        </div>

    </>)

}

export default ShowMonths