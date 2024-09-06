import React from 'react'

function Alert(props) {
  return (
    <div style={{height:"1.35rem"}}>
    {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{height:"3.2rem"}}>
      <p>{props.alert.message}</p>
    </div>}
    </div>
  )
}

export default Alert
