import React from 'react'
import Part from './Part'
const Content = (props) => {

    const data = props.data
    
  return (
    <>
      {data.map((part, index) => {
        return <Part key={index} part={part.name} exercises={part.exercises} />
      })}
      
    </>
  )
}

export default Content