import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request
}