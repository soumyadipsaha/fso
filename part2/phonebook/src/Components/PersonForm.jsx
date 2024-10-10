import React from 'react'

const PersonForm = ({handleSubmit, newName, handleNameInput, newNumber, handleNumberInput}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h2>Add New</h2>
        <div>
          name: <input value= {newName} onChange={handleNameInput} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberInput} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm