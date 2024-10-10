import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
       number: '040-123456', 
       id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit= (e)=>{
    e.preventDefault()


    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already in the phonebook`)
      return
    }

    const addPerson ={
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(addPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameInput = (e)=>{
    setNewName(e.target.value)
    
  }

  const handleNumberInput = (e)=>{
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value= {newName} onChange={handleNameInput} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberInput} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=> <p key={person.name}>{person.name+" "+person.number}</p>)}
    </div>
  )
}

export default App