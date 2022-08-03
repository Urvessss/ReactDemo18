import React from 'react'

const Button = (props) => {
    console.log("Rendering Button",props.btnText)
  return (
    <div>
        <button onClick={props.handleClick}>{props.btnText}</button>
    </div>
  )
}

export default React.memo(Button)