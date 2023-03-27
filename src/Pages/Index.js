import {useLoaderData} from 'react-router-dom'

function Index(props){
    const data = useLoaderData()

    function returnmax(arr){
        let count = 0
        let result = 'None'
        arr.forEach((element,index,arr) => {
            const nameCount = arr.filter((e) => e.name == element.name)
            if (nameCount.length > count){
                count = nameCount.length
                result = element.name
            }
        })
        return(result)
    }
    const max = returnmax(data)

    return (
    <div className='indexpage'>

        <table className='table'>
            <tbody>
                <tr>
                    <td>Top food:</td>
                    <td>{max}</td>
                </tr>
                <tr>
                    <td>yo</td>
                    <td>yo</td>
                </tr>
            </tbody>
        </table>
        <h1>Index</h1>
        <h3>recent entries</h3>
        <h3>top foods</h3>
        <h3>Daily High score</h3>

    </div>)
    
}

export default Index