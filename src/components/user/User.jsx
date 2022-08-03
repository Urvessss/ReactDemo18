import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const BASE_URL="https://jsonplaceholder.typicode.com/";
    const [users,getUsers]=useState([]);

    const loadUsers=()=>{
        axios.get(BASE_URL+"users/"+id).then(response =>{
            getUsers(response.data)
            // console.log("DATA",response.data);
        }).catch(err=>{
            // console.log("ERROR",err.message);
            alert('Something is wrong!');
        });
    }
    const {id}=useParams();
useEffect(()=>{
    loadUsers(id);
})
  return (
    <>
   
 <table className="">
        <thead>
            <tr>
                <th>id </th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phoneno</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.address?.city}</td>
            </tr>
        </tbody>
    </table>
    {/* <button onClick={loadUsers}>Load Users</button> */}
    </>
  )
}

export default User