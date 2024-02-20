
const Total = ({parts}) => {
  return <p><b>total of {parts.map(part => part.exercises).reduce((acc, current) => acc + current)} exercises</b></p>
}

export default Total