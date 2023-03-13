import {useLoaderData, useParams} from 'react-router-dom'

function ShowMonths(props, {params}){
    const uniqueMonths = useLoaderData()
    const {year} = useParams();
    return (<>
        <h1>Index COMPONENT</h1>
        <div className="dropdown">
            <button className="dropbtn">Select Month</button>
            <div className = "dropdown-content">
                {uniqueMonths.map((element, index) => {
                    return <a 
                    href = {`../showDays/${year}/${element}`}
                    key = {index}>{element}</a>
                })}
            </div>
        </div>

    </>)

}

export default ShowMonths