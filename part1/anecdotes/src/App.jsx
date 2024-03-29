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
  const [mostVoted, setMostVoted] = useState(anecdotes[0])
  const [maxVotes, setMaxVotes] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // handler function
  const handleNewAnecdote = () => { 
    let rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(anecdotes[rand])
  }

  const handleNewVote = () => {
    const index = anecdotes.indexOf(selected)
    const newVotes = [ ...votes ]
    newVotes[index] += 1
    setVotes(newVotes)

    // check if there is a new most voted anecdote
    if(newVotes[index] > maxVotes) {
      setMaxVotes(newVotes[index])
      setMostVoted(anecdotes[index])
    }

  }

  return (
    <div>
      {/* Random Anecdote */}
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={selected} numOfVotes= {votes[anecdotes.indexOf(selected)]} handleClick = {handleNewVote} showButton = {true} />
      <Button label = "next anecdote" handleClick = {handleNewAnecdote} />

      {/* Most voted anecdote */}
      
      {maxVotes !== 0 ?
       (
        <>
          <h1>Anecdote with most votes</h1>
          <Anecdote anecdote={mostVoted} numOfVotes= {maxVotes} showButton = {false} />
        </>
       )  : null}

    </div>
  )
}

export default App