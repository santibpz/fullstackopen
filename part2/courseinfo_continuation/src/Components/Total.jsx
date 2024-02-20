
const Total = ({parts}) => {
  return <h3><b>total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</b></h3>
}

export default Total