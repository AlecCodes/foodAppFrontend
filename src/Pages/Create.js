import {Form} from 'react-router-dom'
import {useState} from 'react'
import {searchResult} from '../Nutritionix/searchResult'
import {nutritionGetter} from '../Nutritionix/nutritionGetter'

function Create(props){
    const [nameState, setNameState] = useState('')
    const [carbState, setCarbState] = useState(0)
    const [resultsState, setResultsState] = useState('')


/////////////////////////////////////////////
// Change Handlers
/////////////////////////////////////////////
    async function nameChangeHandler(event){
        setNameState(event.target.value)
        //confirm we're not breaking search/instant endpoint w null value
        if (event.target.value.length >= 1){
            const data = await searchResult(event)
            setResultsState(data.common.concat(data.branded))
        }else{
            setResultsState([])
        }      
    }
    function carbChangeHandler(event){
        setCarbState(event.target.value)
    }
/////////////////////////////////////////////
// Click Handlers
/////////////////////////////////////////////
    function handleSuggestionClick(foodname){
        setNameState(foodname)
        nutritionGetter(foodname).then(json => setCarbState(json.foods[0].nf_total_carbohydrate))
        setResultsState([])
    }



    return (
    <>
        <h1>Create COMPONENT</h1>
        <Form autoComplete='off' action="/create" method ="post">
            <div className='autosuggest'>
                <input type = 'text' name = 'name' placeholder='Food Name'
                value = {nameState}
                onChange={nameChangeHandler}
                />
                {resultsState.length > 0 && (
                    <ul>
                        {resultsState.map((suggestion) => {
                            return<li
                            key={suggestion.food_name}
                            onClick={() => handleSuggestionClick(suggestion.food_name)}
                            >
                            <span>{suggestion.food_name}</span>
                            <span>{suggestion.serving_qty} {suggestion.serving_unit}</span>
                            </li>
                        })}
                    </ul>
                )}
            </div>

            <input type = 'number' name = 'carbs' placeholder='carbs'
            onChange={carbChangeHandler}
            value={carbState}
            />

            <input type = 'date' name = 'date' placeholder='date'/>

            <input type = 'submit'/>
        </Form>
    </>)
}

export default Create