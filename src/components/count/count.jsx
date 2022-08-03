import React from 'react'
console.log("Rendering Count")
const Count = (props) => {
    console.log("Rendering Count",props.text)
  return (
    <div>
        <h5>{props.text}-{props.value}</h5>
    </div>
  )
}

export default React.memo(Count)