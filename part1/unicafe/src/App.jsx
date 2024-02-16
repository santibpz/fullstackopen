import { useState } from 'react'
import Button from './components/Button'
import Stat from './components/Stat'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handler functions
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

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
      <Stat category="good" stat = {good} />
      <Stat category="neutral" stat = {neutral} />
      <Stat category="bad" stat = {bad} />
    </div>
  )
}

export default App