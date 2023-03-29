import {useLoaderData, Link} from 'react-router-dom'
import {returnMax, getHighScore, getDailyAvg} from '../filters'

function Index(props){
    const data = useLoaderData()
    const topFood = returnMax(data)
    const highScore = getHighScore(data)
    const avg = getDailyAvg(data)
    const recents = data.slice(data.length-5)

    return (
    <div className='indexpage d-flex flex-column'>

    <div className='h-50 w-100 d-flex justify-content-around align-items-center'>
        <div className='text-center'>
            <p className='fw-bold'>High Score</p>
            <hr/>
            <div
            className='text-wrap'
            >{`On ${highScore[0]} you ate ${highScore[1]}g carbs!`}</div>
        </div>
        <div>
            <p className='fw-bold'>Daily Avg</p>
            <hr/>
            <p>{Math.floor(avg)}g</p>
        </div>
        <div>
            <p className='fw-bold'>Top Food</p>
            <hr/>
            <p>{topFood}</p>
        </div>
    </div>
    <hr/>
    <div className='h-50 w-100 justify-self-end'>
        <p>Recent Entries:</p>
        <ul className='list-group-horizontal'>
            {recents.map((element) => {
                return <li
                className='list-group-item'
                key={element.id}
                >
                <Link to={`../edit/${element.id}`}>
                {element.name} - {element.date}
                </Link>
                </li>
            })}
        </ul>
    </div>
    </div>)
    
}

export default Index