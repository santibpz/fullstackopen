/* eslint-disable react/prop-types */
// Component to display statistics for a category

const Stat = ({category, stat}) => {
  return (
    <div>{category} {stat}</div>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, total } = props

  if(total === 0) return <h3>No feedback given</h3>

  return(
      <>
      
      <Stat category="good" stat = {good} />
      <Stat category="neutral" stat = {neutral} />
      <Stat category="bad" stat = {bad} />
      <Stat category="all" stat = {total} /> 
      <Stat category="average" stat = {(good * 1 + neutral * 0 + bad * -1) / total} /> 
      <Stat category="average" stat = {`${(good * 100) / total} %`} /> 
      </>
  )
}


export default Statistics 