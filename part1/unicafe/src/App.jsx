import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodSetter = ()=>{
    setGood (good+1)
  }
   const setBadSetter = ()=>{
    setBad (bad+1)
  }
   const setNeutralSetter = ()=>{
    setNeutral (neutral+1)
  }

 const Button = ({ handleClick, text }) => { 
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

  const StatisticLine = ({text, value})=>{
    
    return(<p>{text}: {value}</p>)
  }

  const Statistics = (props)=>{
    const {good, neutral, bad} = props

    return(
      <>
      <h1>Statistics</h1>
      {good+bad+neutral === 0? (<p>No Feedback Given</p>) :(  <>
      <StatisticLine text = "Good" value={good}/>
      <StatisticLine text = "Bad" value={bad}/>
      <StatisticLine text = "Neutral" value={neutral}/>
      <StatisticLine text = "All" value={good+neutral+bad}/>
      <StatisticLine text = "Average" value={(good-bad)/(good+neutral+bad)}/>
      <StatisticLine text = "Positive" value={(good/(good+neutral+bad))*100 +"%"}/>
     
      </>)}
  
    
      </>
    )

  }


  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={setGoodSetter} text="Good" />
     <Button handleClick={setBadSetter} text="Bad" />
     <Button handleClick={setNeutralSetter} text="Neutral" />
      <Statistics 
        good = {good}
        bad = {bad}
        neutral = {neutral}  />
      

    </>
  )
}

export default App