import React from 'react'
import { useEffect, useState } from 'react'
import { getAll } from "./services/countries"
import DisplayResults from './Components/DisplayResults'



const App = () => {

  const [filter, setFilter] = useState('')
  const [countriesData, setCountriesData] = useState([])

useEffect(() => {
  getAll()
    .then(response =>{
      setCountriesData(response.data)
      console.log(response.data)
    })
    .catch(error=>{
      alert("Load data failed")
    })
},[])

  return (
    <>
    <div>
      find countries <input onChange= {e => setFilter(e.target.value)}/>
    </div>
    <DisplayResults countriesData={countriesData} filter={filter}/>

    </>
  )
}

export default App