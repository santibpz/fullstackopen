/* eslint-disable react/prop-types */

const Notification = ({ message }) => {

  if(message !== null) {

      const { text, type } = message
      return (
        <div className={type}>{text}</div>
      )
  }
}

export default Notification