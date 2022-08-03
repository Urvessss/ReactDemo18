
import React from 'react'
import { useState } from 'react';
import './Contact.css'
const Contact = (props) => {
  let title=props.gender==="M" ? "Mr" : "Ms";
  const [contacted,setContacted]=useState(props.contacted)
  return (
    
    <div className={ (contacted ? "contactCard checked" : "contactCard") + " " 
    + (props.gender ==="M" ? "contactCard male" :"contactCard female") } >
      <div >
        <h3>{title}{props.name}</h3>
        <hr/>
        {props.phone ?<h4>Phone:{props.phone}</h4>:""}
        {props.email ? <h4>Email:{props.email}</h4>:<h4>Email:NA</h4>}


      </div>
      <hr/>
      <input type='checkbox'  checked={contacted} onChange={()=>setContacted(!contacted)}/>Contacted
    </div>
  )
}

export default Contact



























// import './Contact.css';

// import React from 'react'

// const Contact = (props) => {
//   return (
//     <div className='contactCard'>

//         {/* {props.gender==="M"  ? <h3 >Name: Mr {props.name } </h3> : <h3 > Name: Ms {props.name} </h3>}<hr/>
//         { props.phone ? <h4>Phone:{props.phone}</h4>:<h4>Phone:NA</h4>}
//         {  props.email ? <h4>Email:{props.email}</h4>:<h4>Email:NA</h4>} */}

//         {

// props.gender==="M" ? <div className='male'><h3 >Mr: {props.name}</h3> <h4>Email:{props.email}</h4>  <h4>Phone:{props.phone}</h4></div> :

// <div className='female'><h3 className='female'>Mrs: {props.name}</h3> <h4>Email:{props.email}</h4> <h4>Phone:{props.phone}</h4> </div>

// }
//         </div>
   
//   )
// }

// export default Contact;()