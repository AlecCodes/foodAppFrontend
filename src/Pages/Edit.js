import {useLoaderData, Form} from "react-router-dom"

function Edit(props){
    const data = useLoaderData()
    return (
    <div className="editpage">
        <h2>Set the record straight</h2>
        <div className="d-flex pt-4 justify-content-center align-items-center container">
            <Form
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
        </div>
    </div>
    )
}

export default Edit