import { redirect } from "react-router-dom"
const URL = 'https://ahtestone.herokuapp.com/foods'


export const createAction = async({request}) => {
    const formData = await request.formData()
    const newFood = {
        name: formData.get("name"),
        carbs: formData.get("carbs"),
        date: formData.get("date")
    }
    console.log(newFood)
    await fetch (URL, {
        method: "post",
        headers: {'Content-Type':'application/json'
        },
        body: JSON.stringify(newFood)
        }
    )
    return redirect('/')
}

export const editAction = async({request, params}) => {
    const formData = await request.formData()
    const newFood = {
        name: formData.get("name"),
        carbs: formData.get("carbs"),
        date: formData.get("date")
    }
    await fetch (URL + '/' + params.id, {
        method: "put",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newFood)
        }
    )
    return redirect('/')
}

export const deleteAction = async({request, params}) => {
    await fetch(URL + '/' + params.id, {
        method: "delete"
    })
    return redirect('/showYears')
}