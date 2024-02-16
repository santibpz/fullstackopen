import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // handler functions
  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  
  const handleNeutralClick = () =>  {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)

  } 

  return (
    <div>
      {/* title */}
      <h1>give feedback</h1>

      {/* Buttons */}
      <Button handleClick={handleGoodClick} label = "good" />
      <Button handleClick={handleNeutralClick} label = "neutral" />
      <Button handleClick={handleBadClick} label = "bad" />

      {/* Statistics */}
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
       
    </div>
  )
}

export default App