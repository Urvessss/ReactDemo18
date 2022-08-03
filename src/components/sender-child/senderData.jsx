import React from 'react'
import { useState } from 'react';
const SenderData = (props) => {
    const[name,setName]=useState({firstName:'',lastName:''});
  return (
    <div>
        <h2>{JSON.stringify(name)}</h2>
        <input type="text" placeholder='Enter First Name'
        value={name.firstName}
        onChange={e=>setName({...name,firstName:e.target.value})}/>

<input type="text" placeholder='Enter Last Name'
        value={name.lasttName}
        onChange={e=>setName({...name,lastName:e.target.value})}/>

<button onClick={() => props.onSend(name)}>

Send data to Parent

</button>
    </div>
  )
}

export default SenderData