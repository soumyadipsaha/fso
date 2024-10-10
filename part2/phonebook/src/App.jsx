import { useState , useEffect} from 'react'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import Persons from './Components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  },[])

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

    axios
      .post('http://localhost:3001/persons', addPerson)
      .then(response=>{
        setPersons(persons.concat(addPerson))
      })
      .catch(error=>{
        alert("Operation Failed!")
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