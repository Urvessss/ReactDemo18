import React from 'react'
import WithCounter from '../with-counter/with-counter'
const HoverCounter = (props) => {
  return (
    <>
    {/* <h2 onMouseOver={props.increment}>Count:{props.count}</h2> */}
    <h2 onMouseOver={props.increment}>Count:{props.start}</h2>
 
    created By:{props.createdBy}
    </>

  )
}

export default WithCounter(HoverCounter)