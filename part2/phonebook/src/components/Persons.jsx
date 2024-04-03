/* eslint-disable react/prop-types */
import Person from './Person'


const Persons = ({ persons, handleDelete }) => {

  

  return (
    <div>
      <h3>Persons</h3>
      {persons.length === 0 ? (
        <p>No persons available.</p>
      ) : (
        persons.map((person) => (
          <Person 
            key={person.id} 
            name={person.name} 
            phone={person.phone}
            handleDelete={() => handleDelete(person.id)} />
        ))
      )}
    </div>
  );
};


export default Persons