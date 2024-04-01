/* eslint-disable react/prop-types */
import Person from './Person'


const Persons = ({persons}) => {
  return (
    <div>
        <h3>Persons</h3>
    {
            persons.map(person => <Person 
                                key = {person.id} 
                                name={person.name} 
                                phone={person.phone} />)
       
    }
    </div>
  )
}

export default Persons