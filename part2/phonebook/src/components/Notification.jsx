/* eslint-disable react/prop-types */

const Notification = ({ message }) => {

  if(message !== null) {
      return (
        <div className="success">{message}</div>
      )
  }
}

export default Notification