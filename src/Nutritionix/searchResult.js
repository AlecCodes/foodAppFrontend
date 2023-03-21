import {URL, appID, appKey} from './keys'

export async function searchResult(event){
    const response = await fetch(URL+`search/instant?query=${event.target.value}`, {
        method: "get",
        headers: {
            'x-app-id' : appID,
            'x-app-key': appKey
        }
    })
    const data = await response.json()
    return data
}