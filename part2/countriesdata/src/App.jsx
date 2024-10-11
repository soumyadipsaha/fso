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

const showCountry = (showThisCountry)=>{
setFilter(showThisCountry)
}

  return (
    <>
    <div>
      find countries <input value={filter} onChange= {e => setFilter(e.target.value)}/>
    </div>
    <DisplayResults countriesData={countriesData} showCountry={showCountry} filter={filter}/>

    </>
  )
}

export default App