/* eslint-disable react/prop-types */
// Component to display statistics for a category

const Stat = ({category, stat}) => {
  return (
    <div>{category} {stat}</div>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, total } = props
  return(
      <>
      <h1>statistics</h1>
      <Stat category="good" stat = {good} />
      <Stat category="neutral" stat = {neutral} />
      <Stat category="bad" stat = {bad} />
      <Stat category="all" stat = {total} /> 
      <Stat category="average" stat = {total == 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total} /> 
      <Stat category="average" stat = {total == 0 ? 0 : `${(good * 100) / total} %`} /> 
      </>
  )
}


export default Statistics 