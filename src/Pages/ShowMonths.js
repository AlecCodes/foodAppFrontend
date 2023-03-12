import {useLoaderData} from 'react-router-dom'

function ShowMonths(props){
    const uniqueMonths = useLoaderData()
    console.log(uniqueMonths)
    return (<>
        <h1>Index COMPONENT</h1>
        <div className="dropdown">
            <button className="dropbtn">Select Month</button>
            <div className = "dropdown-content">
                {uniqueMonths.map((element, index) => {
                    return <a 
                    key = {index}>{element}</a>
                })}
            </div>
        </div>

    </>)

}

export default ShowMonths