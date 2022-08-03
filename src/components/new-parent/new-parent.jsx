import Button from '../button/button'
import React from 'react'
import Title from '../title/title'
import Count from '../count/count'
import { useState,useCallback } from 'react'
const NewParent = (props) => {
    const [age,setAge]=useState(18);
    const[salary,setSalary]=useState(50000)
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incerementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    console.log('Rendering new parent comp')
  return (
    <div>
    <Title></Title>
    <hr/>
    <Count text ="Salary" value={salary}></Count>
    <Button btnText="Incerement Salary " handleClick={incerementSalary}></Button>
    <hr/>
    <Count text="Age" value={age}></Count>
    <Button btnText="Incerement Age" handleClick={incrementAge}></Button>
    </div>
  )
}

export default NewParent