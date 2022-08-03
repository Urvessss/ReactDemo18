import React from 'react'
import { useState, useContext } from 'react';
import './Form.css'
import axios from 'axios'
import LoginContext from '../Login/LoginContext';
const Form = (props) => {
    const[formData,setUser]=useState({user:{name:"",username:"",email:"",phone:""},
                                  validationMsg:{name:"",username:"",email:"",phone:""}})
const handleInput=(e)=>{
    let {id,value}=e.target;
    let msg="";
    switch(id){
        case'name':
        msg=value.length===0 ? 'Name is Madatory':(value.length <3 ?
            'Name Must have atleast 3 characters':"");
            break;
       case'username':
        msg=value.length===0 ? 'UserName is Madatory':(value.length <3 ?
            'UserName Must have atleast 3 characters':"");
            break;
            case'email':
        msg=value.length===0 ? 'Email is Madatory':(value.length ?
            'Email Should be specific syntax':"");
            break;
            case'phone':
            msg=value.length===0 ? 'Phone  is Madatory':(value.length <10 ?
                'Phone Should be 10 digit':"");
                break;
            default:
                break;
    }
    setUser({...formData,validationMsg:{...formData.validationMsg,[id]:msg},
    user:{...formData.user,[id]:value}
    })
}
const validateForm=()=>{
    let valid =true;
    Object.values(formData.validationMsg).forEach(value=>{
        if(value.length!==0)
        valid=false;
    })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData.user);
    if(validateForm){
        axios.post('addStudentDetails',formData.user).then(resp=>{
            console.log('Data Submitted',resp.data);
        })
    }
    else{
        console.log('Invalid Form')
    }
    
    
}

     
            
                

  return (
    <div className='containerBox'>
<form onSubmit={handleSubmit}>
    <div className='form-group' style={{marginBottom:'10px'}}>
        <label>Name</label>
        <input type='text' id='name' placeholder='Enter Name' className="form-control" onChange={handleInput}></input>
   {formData.validationMsg.name.length!==0 ? <div className='alert alert danger'>{formData.validationMsg.name}</div>:''}
    </div>
    <div className='form-group' style={{marginBottom:'10px'}}>
        <label>UserName</label>
        <input type='text' id='username' placeholder='Enter Name UserName' className="form-control" onChange={handleInput}></input>
        {formData.validationMsg.username.length!==0 ? <div className='alert alert danger'>{formData.validationMsg.username}</div>:''}
    </div>
    <div className='form-group' style={{marginBottom:'10px'}}>
        <label>Email</label>
        <input type='text' id='email' placeholder='Enter Email' className="form-control" onChange={handleInput}></input>
        {formData.validationMsg.email.length!==0 ? <div className='alert alert danger'>{formData.validationMsg.email}</div>:''}
    </div>
    <div className='form-group' style={{marginBottom:'10px'}}>
        <label>Phone No</label>
        <input type='text' id='phone' placeholder='Enter Phone' className="form-control" onChange={handleInput}></input>
        {formData.validationMsg.phone.length!==0 ? <div className='alert alert danger'>{formData.validationMsg.phone}</div>:''}
    </div>
    <div>
        <button className='btn btn-primary'>Submit</button>
    </div>

</form>

    </div>
  )
}

export default Form