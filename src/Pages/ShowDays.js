import { useLoaderData, Link } from "react-router-dom"

function ShowDays(props){
    const uniqueDays = useLoaderData()
    return (
        <div className="container showpage">
            <div className="dropdown">
                <button className="dropbtn">Select Day</button>
                <div className = "dropdown-content">
                    {uniqueDays.map((element, index) => {
                        return <Link 
                        to = {`../../showDay/${element}`}
                        key = {index}>{element}</Link>
                    })}
                </div>
            </div>
        </div>

    )
}

export default ShowDays