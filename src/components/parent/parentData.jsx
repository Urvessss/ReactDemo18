import { useState } from "react";

import React from 'react'
import SenderData from "../sender-child/senderData";

const ParentData = () => {
  const[name,setName]=useState({})
  const getValue=(e)=>{
    setName(e)
  }
  return (
    <>
    <h2>Value From Child:{name.firstName}{name.lastName}</h2>
    <hr/>
    <SenderData onSend={getValue}/>
    </>
  )
}

export default ParentData











