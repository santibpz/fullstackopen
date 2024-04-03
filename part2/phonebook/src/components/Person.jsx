/* eslint-disable react/prop-types */

const Person = ({ name, phone, handleDelete }) => {
  return (
    <div>
      {name}  {phone} <button onClick = {handleDelete}>Delete</button>
      </div>
  )
}

export default Person