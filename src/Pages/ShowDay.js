import { useLoaderData } from "react-router-dom";

function ShowDay(props){
    const dayData = useLoaderData()
    console.log(dayData)
    return (
        <>
        <ul>
        {dayData.map((element) => {
            return<li>{element.name}</li>
        })}
        </ul>
        </>
    )
}

export default ShowDay;