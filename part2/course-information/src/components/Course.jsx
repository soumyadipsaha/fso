import React from 'react'
import Part from './Part'


const Course = (props) => {

    const courseName = props.course.name
    const parts = props.course.parts



  return (
    <>
    <h1>{courseName}</h1>
    
    {parts.map((part => {
        return <Part key={part.id} name={part.name} exercises={part.exercises}/>
    }))}
    
    </>
  )
}

export default Course