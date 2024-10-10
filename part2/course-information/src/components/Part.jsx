import React from 'react'

const Part = ({key, name, exercises}) => {
  return (
    <p>{name} : {exercises}</p>
  )
}

export default Part