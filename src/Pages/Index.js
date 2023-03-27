import {useLoaderData} from 'react-router-dom'
import {returnMax, getHighScore, getDailyAvg} from '../filters'

function Index(props){
    const data = useLoaderData()
    const max = returnMax(data)
    const record = getHighScore(data)
    const avg = getDailyAvg(data)
    const recents = data.slice(data.length-5)

    return (
    <div className='indexpage'>

        <table className='table'>
            <tbody>
                <tr>
                    <td>Top food:</td>
                    <td>{max}</td>
                </tr>
                <tr>
                    <td>Avg daily carb intake:</td>
                    <td>{avg}</td>
                </tr>
            </tbody>
        </table>
        <h1>Index</h1>
        <h3>top foods</h3>
        <h3>{`Daily High Score: On ${record[0]} you ate ${record[1]}g carbs!`}</h3>
        <h3>recent entries</h3>
        <ul className='list-group'>
            {recents.map((element) => {
                return <li
                className='list-group-item'
                >{element.name} - {element.date}</li>
            })}
        </ul>

    </div>)
    
}

export default Index