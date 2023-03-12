import {useLoaderData, Form} from 'react-router-dom'


function Index(props){
    const data = useLoaderData()
    const months = []
    //grab month string from parsed date str
    data.forEach((element) => months.push(new Intl.DateTimeFormat("en-US", { year : "numeric" }).format(new Date(element.date))))
    console.log(months)

    //grab only unique months
    function isUnique(element, index, arr){
        return arr.indexOf(element) === index
    }
    const uniqueMonths = months.filter(isUnique)

    console.log(uniqueMonths)
    return (<>
        <h1>Index COMPONENT</h1>
        <Form>
            <input placeholder='year'/>
            <input placeholder='month'/>
            <input type = 'submit'/>
        </Form>
        <div className="dropdown">
            <button className="dropbtn">Select Year</button>
            <div className = "dropdown-content">
                {uniqueMonths.map((element, index) => {
                    return <div key = {index}>{element}</div>
                })}
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Select Month</button>
            <div className = "dropdown-content">
                {uniqueMonths.map((element, index) => {
                    return <div key = {index}>{element}</div>
                })}
            </div>
        </div>

    </>)

}

export default Index