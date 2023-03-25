import {useLoaderData, Form} from 'react-router-dom'
import {uniqueMonthsFilter, uniqueYearsFilter} from '../filters'

function Index(props){
    const data = useLoaderData()
    return(
        <h1 className='LANDING'>OK YO</h1>
    )
}

export default Index