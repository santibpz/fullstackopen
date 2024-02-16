/* eslint-disable react/prop-types */
// Button component

const Button = ({label, handleClick}) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button