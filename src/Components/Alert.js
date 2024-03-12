import React from 'react'

function Alert(props) {
  return (
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{height:"3.5rem"}}>
      <p>{props.alert.message}</p>
    </div>
  )
}

export default Alert
