import React from 'react'
//write rfc to make a function based component

function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{height:"3.5rem"}}>
      <p>{props.alert.message}</p>
    </div>
  )
}

export default Alert
