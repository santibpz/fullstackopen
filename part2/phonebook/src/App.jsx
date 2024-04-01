import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [personsFound, setPersonsFound] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [matchFound, setMatchFound] = useState(false)
  const [nameToFind, setNameToFind] = useState('')



  // function to filter by name
  const handleFind = (e) => {

    setNameToFind(e.target.value)

    const pattern = e.target.value.toLowerCase()

    // check if a person is found
    const personsFoundByName = persons.filter(p => p.name.toLowerCase().startsWith(pattern))
    
    // if persons are found
    if(personsFoundByName.length !== 0) {
      setMatchFound(true)
      setPersonsFound(personsFoundByName)
      return
    }

    // if no persons are found
    setPersonsFound([])
    setMatchFound(false)

  }
  
  // function to add a new person to the phonebook
  const handleSubmit = e => {
    e.preventDefault()

    // Toggle found state to false when adding a new person
    setMatchFound(false)
    setNameToFind('')

    // check if person to be added already exists in the phonebook
    const repeatedName = persons.find(p => p.name === newName)
    if(repeatedName) {
      alert(`${newName} already exists in the phonebook`)
      return
    }

    // new person object
    const newPerson = {
      name: newName,
      phone: newPhone
    }

    // add the new person to the state
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
  }

  const personsToShow = matchFound ?
                        personsFound :
                        persons

  return (
    <div>

      <h2>Filter</h2>
      <div>
        <input 
         value = {nameToFind} 
         onChange = {handleFind}/>
      </div>

      <h2>Phonebook</h2>
      <form onSubmit = {handleSubmit}>
        <div>
          name: <input
                 value = {newName} 
                 onChange = {(event) => setNewName(event.target.value)} />
        </div>

        <div>
          phone: <input
                 value = {newPhone} 
                 onChange = {(event) => setNewPhone(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {
        personsToShow.map(person => <Person key = {person.id} name={person.name} phone={person.phone} />)
      }
    </div>
  )
}

export default App