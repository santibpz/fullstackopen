import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [personsFound, setPersonsFound] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [matchFound, setMatchFound] = useState(false)
  const [nameToFind, setNameToFind] = useState('')

  // Fetch data from the server after first render of the App Component
  useEffect(() => {
    personService
      .getAll()
      .then(persons => setPersons(persons))
      .catch(() => {
        alert("There was an error fetching data from the server, try again later.")
        return
      })
      
  }, [])

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

    // save person to the server
    personService
      .CreatePerson(newPerson)
      .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewPhone('')   
      })
      .catch(() => alert("There was an error creating the record, try again later."))
    
  }

  // handler fn for deleting a user
  const handleDelete = id => {
    const personToDelete = persons.find(p => p.id === id)

    if(window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .DeletePerson(id)
        .then(personId => setPersons(persons.filter(p => p.id !== personId)))
        .catch(() => alert("There was a problem deleting the record, try again later."))
    }
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

      <Persons 
        persons={personsToShow}
        handleDelete={handleDelete} />
    </div>
  )
}

export default App