import axios from "axios"
const baseUrl = "http://localhost:3001/api/persons"

//works with backend
export const getAll = () => {
    return axios.get(baseUrl)
}
//works with backend
export const createPerson = (newObject) => {
    return axios.post(baseUrl, newObject)
}
//works wirh backend
export const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export const updatePerson = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
