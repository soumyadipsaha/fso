import React from 'react'

const Persons = ({ persons, filter, handleDelete }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        person.name.toLowerCase().includes(filter.toLowerCase()) ? (
          <div key={person.id}>
            <p>{person.name} {person.number} {" "}
            <button onClick={()=>handleDelete(person)}>Delete</button>
            </p>
          </div>
        ) : null
      ))}
    </>
  )
}

export default Persons
