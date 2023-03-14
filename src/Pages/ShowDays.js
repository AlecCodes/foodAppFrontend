import { useLoaderData } from "react-router-dom"

function ShowDays(props){
    const data = useLoaderData()
    console.log(data)
    return <h1>ShowDays COMPONENT</h1>
}

export default ShowDays