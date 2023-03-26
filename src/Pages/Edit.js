import {useLoaderData, Form} from "react-router-dom"

function Edit(props){
    const data = useLoaderData()
    return (
        <>
        <h2
        className="p-4"
        >Set the record straight</h2>
        <Form
        className="container" 
        action = {`/edit/${data.id}`} method = "post">
            <div className="form-group">
                <label>Food Name</label>
                <input
                className="form-control" 
                type="text" name="name" defaultValue={data.name}></input>
            </div>
            <div className="form-group">
                <label>Carbs</label>
                <input 
                className="form-control"
                type="number" name='carbs' defaultValue={data.carbs}></input>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input 
                className="form-control"
                type="date" name="date" defaultValue={data.date}></input>
            </div>
            <input className="btn btn-primary m-4" type='submit'/>
        </Form>
        </>
    )
}

export default Edit