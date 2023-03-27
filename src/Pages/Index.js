import {useLoaderData} from 'react-router-dom'
import {returnMax, getHighScore} from '../filters'

function Index(props){
    const data = useLoaderData()
    const max = returnMax(data)
    const record = getHighScore(data)


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
        <h3>{`Daily High Score: On ${record[0]} you ate ${record[1]}g carbs!`}</h3>

    </div>)
    
}

export default Index