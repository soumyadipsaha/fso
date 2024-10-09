import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const Statistics = (props)=>{
    const {good, neutral, bad} = props

    return(
      <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good+neutral+bad}</p>
      <p>Average: {(good-bad)/(good+neutral+bad)}</p>
      <p>Positive: {(good/(good+neutral+bad))*100} %</p>
      </>
    )

  }


  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={()=>setGood(good+1)}>Good</button>
      <button onClick ={()=>setNeutral(neutral+1)} >Neutral</button>
      <button onClick = {()=> setBad(bad+1)}>Bad</button>
      <Statistics 
        good = {good}
        bad = {bad}
        neutral = {neutral}  />
      

    </>
  )
}

export default App