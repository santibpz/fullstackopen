/* eslint-disable react/prop-types */

const PersonForm = (props) => {
  return (
    <>
    <h3>Add New</h3>
    <form onSubmit = {props.handleSubmit}>
        <div>
          name: <input
                 value = {props.newName} 
                 onChange = {props.handleNewName} />
        </div>

        <div>
          phone: <input
                 value = {props.newPhone} 
                 onChange = {props.handleNewPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </>
  )
}

export default PersonForm