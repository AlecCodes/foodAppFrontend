import {useLoaderData, Form} from "react-router-dom"

function Edit(props){
    const data = useLoaderData()
    return (
        <>
        <h2
        className="p-4"
        >Set the record straight</h2>
        <Form action = {`/edit/${data.id}`} method = "post">
            <input type="text" name="name" defaultValue={data.name}></input>
            <input type="date" name="date" defaultValue={data.date}></input>
            <input type="number" name='carbs' defaultValue={data.carbs}></input>
            <input type='submit'/>
        </Form>
        </>
    )
}

export default Edit