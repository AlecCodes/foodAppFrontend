import { useLoaderData, Link } from "react-router-dom";

function ShowDay(props){
    const dayData = useLoaderData()
    return (
        <>
        <table>
        <tbody>
            {dayData.map((element, index) => {
                return(
                <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.carbs}g carbs</td>
                    <td><Link to = {`../../edit/${element.id}`}>Edit</Link></td>
                    <td><Link>Delete</Link></td>
                </tr>
                )
            })}
        </tbody>
        </table>
        </>
    )
}

export default ShowDay;