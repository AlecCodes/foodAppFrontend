import {Form} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {searchResult} from '../Nutritionix/searchResult'
import {nutritionGetter} from '../Nutritionix/nutritionGetter'


function Create(props){
    const [nameState, setNameState] = useState('')
    const [carbState, setCarbState] = useState(0)
    const [dateState, setDateState] = useState({myDateField: new Date().toISOString().split('T')[0]})
    const [qtyState, setQtyState] = useState(0)
    const [resultsState, setResultsState] = useState('')
    const [ratioState, setRatioState] = useState(null)

/////////////////////////////////////////////
// Change Handlers
/////////////////////////////////////////////
    async function nameChangeHandler(event){
        setNameState(event.target.value)
        //confirm we're not breaking search/instant endpoint w null value
        if (event.target.value.length >= 1){
            //async to wait for api
            const data = await searchResult(event)
            setResultsState(data.common.concat(data.branded))
        }else{
            setResultsState([])
        }      
    }
    function carbChangeHandler(event){
        setCarbState(event.target.value)
    }
    function dateChangeHandler(event){
        setDateState(event.target.value)
    }
    function qtyChangeHandler(event){
        if (event.target.value > 0){
            setQtyState(event.target.value)
        } else {
            setQtyState(0)
        }
    }
/////////////////////////////////////////////
// Click Handlers
/////////////////////////////////////////////

    //Change to async function??? Then call setCarbState once promise fulfilled?
    async function handleSuggestionClick(suggestion){
        setNameState(suggestion.food_name)
        setQtyState(suggestion.serving_qty)
        nutritionGetter(suggestion.food_name).then(json => setCarbState(json.foods[0].nf_total_carbohydrate))
        setResultsState([])
    }

/////////////////////////////////////////////
// UseEffect hooks
/////////////////////////////////////////////
    useEffect(() => {
        if (qtyState !== 0){
            const newRatio = carbState/qtyState
            setRatioState(newRatio)
        }
    }, [carbState, qtyState])

    useEffect(() => {
        const netCarbs = ratioState*qtyState
        setCarbState(netCarbs)
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qtyState])

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
                            onClick={() => handleSuggestionClick(suggestion)}
                            >
                            <span className='foodname'>{suggestion.food_name}</span>
                            <span className='foodqty'>{suggestion.serving_qty} {suggestion.serving_unit}</span>
                            </li>
                        })}
                    </ul>
                )}
            </div>
            
            <input type = 'number' placeholder='quantity'
            onChange={qtyChangeHandler}
            value={qtyState}
            />

            <input type = 'number' name = 'carbs' placeholder='carbs'
            onChange={carbChangeHandler}
            value={carbState}
            />

            <input type = 'date' name = 'date' placeholder='date'
            value={dateState.myDateField}
            onChange={dateChangeHandler}
            />

            <input type = 'submit'/>
        </Form>
    </>)
}

export default Create