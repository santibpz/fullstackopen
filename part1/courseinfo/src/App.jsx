import Content from "./Components/Content"
import Header from "./Components/Header"
import Total from "./Components/Total"

const App = () => {
  const course = 'Half Stack application development'

  const contents = [
    {
      content: 'Fundamentals of React',
      exercises: 10
    },
    {
      content: 'Using props to pass data',
      exercises: 7
    },
    {
      content: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total total = {contents.map(course => course.exercises).reduce((accum, current) => accum + current)}/>
    </div>
  )
}

export default App