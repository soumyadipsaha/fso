import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

export const getAll = () => {
    const request = axios.get(baseUrl)
    return axios.get(baseUrl)
}

export const createPerson = (newObject) => {
    return axios.post(baseUrl, newObject)
}


