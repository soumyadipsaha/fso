import { useState , useEffect} from 'react'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import Persons from './Components/Persons'
import axios from 'axios'
import {createPerson, getAll, deletePerson, updatePerson} from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(() => {
    getAll()
      .then(response =>{
        setPersons(response.data)
      })
      .catch(error=>{
        alert("Load data failed")
      })
  },[])

  const handleSubmit= (e)=>{
    e.preventDefault()

    const existingPerson = persons.find(person => person.name === newName);

if (existingPerson) {
  if (!window.confirm(`${newName} is already in the phonebook, do you want to replace the number?`)) {
    return;
  }

  const updatedPerson = { ...existingPerson, number: newNumber };


  updatePerson(existingPerson.id, updatedPerson)
    .then(response => {
      setPersons(persons.map(person => 
        person.id === existingPerson.id ? response.data : person
      ))
      alert(`Replaced ${newName}'s number with ${newNumber}`);
    })
    .catch(error => {
      alert("Operation Failed");
    })

  return;
}


    const addPerson ={
      name: newName,
      number: newNumber
    }

    createPerson(addPerson)
      .then(response=>{
        console.log(response)
         setPersons(persons.concat(response.data))
      })
      .catch(error=>{
        alert("Operation Failed")
      })
    
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

  const handleDelete = (toDelete)=>{
  
    if(!(window.confirm(`Delete ${toDelete.name} ?`))){
      return
    }
    console.log(toDelete)

    deletePerson(toDelete.id)
      .then(response=>{
        setPersons(persons.filter(person => person.id !== toDelete.id))
      })
      .catch(error=>{
        alert("Operation Failed")
      })
    
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
        handleDelete={handleDelete}
      />
      
    </div>
  )
}

export default App