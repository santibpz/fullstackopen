// Content Component

import Part from "./Part"

const Content = ({ contents }) => {
  return (
    <>
    {
        contents.map((course, index) => <Part 
                                         key={index}
                                         part={course.content}
                                         exercise={course.exercises}  /> )
    }
    </>
  )
}

export default Content