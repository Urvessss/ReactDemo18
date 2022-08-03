import React from 'react'

const SenderChild = (props) => {
  return (
    <>
    <h3>Sender Child</h3>
    <button onClick={()=>props.onSend("This meg is send from child to parent component")}>Send Data to parent</button>
    </>
  )
}

export default SenderChild