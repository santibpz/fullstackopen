/* eslint-disable react/prop-types */
// Component to display statistics for a category

const Stat = ({category, value}) => {
  return (
    <div>{category} {value}</div>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, total } = props

  if(total === 0) return <h3>No feedback given</h3>

  return(
      <>
        <Stat category="good" value = {good} />
        <Stat category="neutral" value = {neutral} />
        <Stat category="bad" value = {bad} />
        <Stat category="all" value = {total} /> 
        <Stat category="average" value = {(good * 1 + neutral * 0 + bad * -1) / total} /> 
        <Stat category="percentage" value = {`${(good * 100) / total} %`} /> 
      </>
  )
}


export default Statistics 