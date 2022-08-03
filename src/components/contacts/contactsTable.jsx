import React from 'react'
import './contactsTable.css'
import { contactList } from "../data/contact-list"
import { useContext } from 'react'
import UserContext from '../../context/user-context'

const ContactsTable = () => {

    let contextvalue=  useContext(UserContext);
     return (
            <div>
                <h3>This is UserContect value:{contextvalue.getData.userName}</h3>
                <h3>This is UserContect value:{contextvalue.getData.usersCount}</h3>
      <table className="table  w-auto small table table-light table-striped ">
        <thead>
            <tr>
                <th>id </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>gender</th>
            </tr>
        </thead>
        <tbody >
          {contactList.map((c, k) => {
                                    return (
                                        <tr k={k} >
                                            <td >{c.id}</td>
                                            <td>{c.name}</td>
                                            <td >{c.email}</td>
                                            <td >{c.phone}</td>
                                            <td >{c.gender}</td>
                                            </tr>
                                    )
                                })}
                            </tbody>
    </table>
            </div>
        )
}


export default ContactsTable