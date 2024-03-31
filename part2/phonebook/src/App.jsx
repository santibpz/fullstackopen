import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    // check if person to be added already exists in the phonebook
    const repeatedName = persons.find(p => p.name === newName)
    if(repeatedName) {
      alert(`${newName} already exists in the phonebook`)
      return
    }

    // new person object
    const newPerson = {
      name: newName,
    }

    // add the new person to the state
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          name: <input
                 value = {newName} 
                 onChange = {(event) => setNewName(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <Person key = {person.name} name={person.name} />)
      }
    </div>
  )
}

export default App