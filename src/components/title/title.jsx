import React from 'react'
console.log("rendering Title")
const Title = () => {
  return (
    <div>
        <h3>Demo For Performance</h3>
    </div>
  )
}

export default React.memo(Title)