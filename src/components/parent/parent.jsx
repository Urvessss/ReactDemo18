import React from 'react'
import { useState } from 'react'
import SenderChild from '../sender-child/sender-child'
const Parent = (props) => {
    const[val,getVal]=useState('')
    const getValue=(e)=>{
        getVal(e)
    }
  return (
    <>
    <h3>Value from Child:{val}</h3>
    <hr/>
    <SenderChild onSend={getValue}></SenderChild>
    
    </>
  )
}

export default Parent