// Content Component

const Content = ({ contents }) => {
  return (
    <>
    {
        contents.map((course, index) => <p key={index}> {course.content} {course.exercises} </p>)
    }
    </>
  )
}

export default Content