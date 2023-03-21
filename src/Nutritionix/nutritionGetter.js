import {URL, appID, appKey} from './keys'

export async function nutritionGetter(foodname){
    return fetch(URL + `natural/nutrients`, {
        method: 'post',
        headers: {
            'Content-Type':'application/json',
            'x-app-id': appID,
            'x-app-key': appKey
        },
        body:JSON.stringify({"query":foodname})
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        return json
    })
    .catch(error => console.error(error))
}