
  import React from 'react'
  
  const Comp2 = ({ deleteHandeler, id }) => {
    return (
        <div >
        {id}
        <input className=' btn-danger'
          type="button"
          id="delete"
          value="Delete"
          onClick={deleteHandeler}
        />
      </div>
    )
  }
  
  export default Comp2