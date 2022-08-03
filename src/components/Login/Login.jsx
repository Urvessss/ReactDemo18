import React from "react";
import { useState } from "react";
import LoginContext from './LoginContext';
import { useContext } from "react";
const Login = () => {

    const [data, setUser] = useState({
        email: "",
        password: ""

    });
    let contextvalue = useContext(LoginContext);
    const handleInput = (e) => {
        let { id, value } = e.target;
        setUser({ ...data, [id]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        contextvalue.setLogin(data)
    }
  return (
    <div className='containerBox'>
<form onSubmit={handleSubmit}>
  <h3>Login</h3>
    <div className='form-group' style={{marginBottom:'10px'}}>
        <label>Email</label>
        <input type='email' id='email' placeholder='Enter Name Email' className="form-control" onChange={handleInput}></input>

    </div>
    <div className='form-group' style={{marginBottom:'10px'}}>
        <label>Password</label>
        <input type='password' id='password' placeholder='Enter Password' className="form-control" onChange={handleInput}></input>

    </div>
    
    <div>
        <button className='btn btn-primary'>Submit</button>
    </div>

</form>
    </div>
  )
}

export default Login