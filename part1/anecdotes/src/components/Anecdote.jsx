/* eslint-disable react/prop-types */
// Anecdote component

const Vote = ({numOfVotes, handleClick}) => {
    return (
       <>
        <p>has {numOfVotes} votes</p>
        <button onClick = {handleClick}>vote</button>
       </>
    )
}
const Anecdote = ({anecdote, numOfVotes, handleClick}) => {
  return (
    <>
        <p>{anecdote}</p>
        <Vote numOfVotes={numOfVotes} handleClick={handleClick} />
    </> 
  )
}

export default Anecdote