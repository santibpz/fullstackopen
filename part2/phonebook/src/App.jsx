import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
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
      phone: newPhone,
      id: persons.length + 1
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
      <h2>Phonebook</h2>

      <Filter nameToFind={nameToFind} handleFind = {handleFind} />

      <PersonForm
       handleSubmit = {handleSubmit}
       newName = {newName}
       handleNewName = {(e) => setNewName(e.target.value)}
       newPhone = {newPhone}
       handleNewPhone = {(e) => setNewPhone(e.target.value)} />

      <Persons persons={personsToShow} />
    </div>
  )
}

export default App