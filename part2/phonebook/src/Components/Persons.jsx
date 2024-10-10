import React from 'react'

const Persons = ({persons, filter}) => {
  return (
    <>
    <h2>Numbers</h2>
      {persons.map((person)=>(
        person.name.toLowerCase().includes(filter.toLowerCase()) ? 
        <p key={person.id}>{person.name} {person.number}</p> : null
      ))}
    </>
  )
}

export default Persons