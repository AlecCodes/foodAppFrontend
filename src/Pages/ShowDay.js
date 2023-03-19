import { useLoaderData, Link, Form } from "react-router-dom";

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
                    <td>
                        <Form action = {`/delete/${element.id}`} method='post'>
                            <input type = 'submit' value='delete'/>
                        </Form>
                    </td>
                </tr>
                )
            })}
        </tbody>
        </table>
        </>
    )
}

export default ShowDay;