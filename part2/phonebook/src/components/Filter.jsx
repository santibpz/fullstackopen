/* eslint-disable react/prop-types */

const Filter = ({nameToFind, handleFind}) => {
  return (
    <>
    <h3>Filter</h3>
      <div>
        <input 
         value = {nameToFind} 
         onChange = {handleFind}/>
      </div>
    </>
  )
}

export default Filter