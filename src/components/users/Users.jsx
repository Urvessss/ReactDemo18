import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
const Users = () => {
    const BASE_URL="https://jsonplaceholder.typicode.com/";
    const [users,getUsers]=useState([]);

    const loadUsers=()=>{
        axios.get(BASE_URL+"users").then(response =>{
            getUsers(response.data)
            // console.log("DATA",response.data);
        }).catch(err=>{
            // console.log("ERROR",err.message);
            alert('Something is wrong!');
        });
    }
    useEffect(()=>{
        loadUsers();
    })
  return (
    <>
     {users.map((c, k) => {
                                    return (
                                        <ul>
                 <li key={k}>{c.id}<Link to={'/users/'+c.id}>{c.name}</Link></li>
                                            
                                        </ul>
                                                 
                                    )
                                })}
    {/* <button onClick={loadUsers}>Load Users</button> */}
    </>
  )
}

export default Users