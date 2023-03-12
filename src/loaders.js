const URL = 'https://ahtestone.herokuapp.com/foods'

export const indexLoader = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}