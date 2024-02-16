import { useState } from 'react'
import Button from './components/Button'
import Anecdote from './components/Anecdote'

const App = () => {
  // Anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // App state
  const [selected, setSelected] = useState(anecdotes[0])

  // handler function
  const handleNewAnecdote = () => { 
    let rand = Math.floor(Math.random() * anecdotes.length)
      setSelected(anecdotes[rand])
  }

  return (
    <div>
      {/* Random Anecdote */}
      <Anecdote anecdote={selected} />
      <Button label = "next anecdote" handleClick = {handleNewAnecdote} />
    </div>
  )
}

export default App