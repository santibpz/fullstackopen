/* eslint-disable react/prop-types */
// Anecdote component

import Button from "./Button"

const Anecdote = (props) => {
  const {anecdote, numOfVotes, handleClick, showButton} = props
  return (
    <>
        <p>{anecdote}</p>
        <p>has {numOfVotes} votes</p>
        {showButton ? <Button label="Vote" handleClick={handleClick} /> : null}

    </> 
  )
}

export default Anecdote