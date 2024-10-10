import React from 'react'

const Filter = ({handleFilterInput}) => {
  return (
  <>
  <h2>Phonebook</h2>
      <div>Search names with
        <input onChange={handleFilterInput}/>
      </div>

  </>
  )
}

export default Filter