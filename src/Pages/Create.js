import {Form} from 'react-router-dom'
 
function Create(props){
    return (<>
        <h1>Create COMPONENT</h1>
        <Form action="/create" method ="post">
            <input type = 'date' name = 'date' placeholder='date'/>

            <input type = 'text' name = 'name' placeholder='Name'/>

            <input type = 'number' name = 'carbs' placeholder='carbs'/>

            <input type = 'submit'/>
        </Form>
    </>)
}

export default Create