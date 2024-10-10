import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()

    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already in the phonebook`)
      return
    }

    const addPerson ={
      name: newName,
    }
    setPersons(persons.concat(addPerson))
    setNewName('')
  }

  const handleInput = (e)=>{
    setNewName(e.target.value)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value= {newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=> <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App