import {useLoaderData, Form} from 'react-router-dom'
import {uniqueMonthsFilter, uniqueYearsFilter} from '../filters'

function Index(props){
    const data = useLoaderData()
    return <h1 className='yo'>Green background is from app.scss</h1>
    
}

export default Index