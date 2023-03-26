import { useLoaderData, Link, Form } from "react-router-dom";

function ShowDay(props){
    const dayData = useLoaderData()
    return (
        <div className="container">
            <h2
            className=" 
            mt-4 mb-4
            text-decoration-underline text-underline-offset-3"
            >{dayData[0].date} Damage Report</h2>
            <table className="table">
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
        </div>
    )
}

export default ShowDay;