import { useState } from 'react'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import Persons from './Components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
   { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const handleFilterInput = (e)=>{
    setFilter(e.target.value)

  }

  return (
    <div>

      <Filter 
        handleFilterInput={handleFilterInput} 
      />
      <PersonForm 
        handleSubmit={handleSubmit} 
        newName={newName} 
        handleNameInput={handleNameInput} 
        newNumber={newNumber} 
        handleNumberInput={handleNumberInput} 
      />
      <Persons 
        persons={persons} 
        filter={filter}
      />
      
    </div>
  )
}

export default App