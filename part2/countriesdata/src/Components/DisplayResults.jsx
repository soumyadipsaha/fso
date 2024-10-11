import React from 'react'

const DisplayResults = ({countriesData, filter,showCountry}) => {

    if(countriesData.length === 0){
        return <div>Loading...</div>
    }

    const filteredResults = countriesData.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (filteredResults.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } 
    else if (filteredResults.length === 1){
        return (<>
        <div>
            <h1>{filteredResults[0].name.common}</h1>
            <p>capital {filteredResults[0].capital}</p>
            <p>area {filteredResults[0].area}</p>
            <h2>languages</h2>
            {console.log(filteredResults[0])}
            <ul>
                {Object.values(filteredResults[0].languages).map((language)=>{
                    return <li key={language}>{language}</li>
                })}
            </ul>
            <img src={filteredResults[0].flags.png} alt="" />
        </div>
        </>)
    }
    else if (filteredResults.length<10){
        return filteredResults.map(country => 
        <div key={country.name.common}>{country.name.common} <button onClick={()=>showCountry(country.name.common)}>show</button></div>
        )
    }
    
}

export default DisplayResults