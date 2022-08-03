import React from 'react'
import { useState } from 'react';
const WithCounter = (Comp) => {
    const NewComp=(props)=>{
        const[count,setCount]=useState(0);
        const[val,setVal]=useState(props.start !=null ? parseInt(props.start):0)

        const incrementStart=()=>{
            setVal(e=>e+1)
        }
        const incerementCount=()=>{
            setCount(prev=>prev+1)
        }
        
    
  return (
    <Comp {...props}start={val}increment={incrementStart}></Comp>
  )
  }
  return NewComp
}

export default WithCounter