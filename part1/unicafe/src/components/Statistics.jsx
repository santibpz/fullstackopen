/* eslint-disable react/prop-types */
// Component to display statistics for a category

const Stat = ({category, value}) => {
  return (
    <>
      <td>{category}</td> 
      <td>{value}</td>
    </>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, total } = props

  if(total === 0) return <h3>No feedback given</h3>

  return(
      <>
       <table>
        <tbody>
          <tr>
            <Stat category="good" value = {good} />
          </tr>
          <tr>
          <Stat category="neutral" value = {neutral} />
          </tr>
          <tr>
            <Stat category="bad" value = {bad} />
          </tr>
          <tr>
            <Stat category="all" value = {total} /> 
          </tr>
          <tr>
            <Stat category="average" value = {((good * 1 + neutral * 0 + bad * -1) / total).toFixed(1)} /> 
          </tr>
          <tr>
            <Stat category="percentage" value = {`${((good * 100) / total).toFixed(1)} %`} /> 
          </tr>
        </tbody>
       </table>
      </>
  )
}


export default Statistics 