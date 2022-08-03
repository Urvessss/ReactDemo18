import React from 'react'
import Comp2 from './Comp2';
import { useState } from 'react';

const Comp1 = () => {
   
    const [ids, setIds] = useState([]);
    const [components, setComponents] = useState([ '1','2','3','4','5','6','7' ]); 
    const addHandeler = () => {
    
    if (components.length > 0 ) { 
      
        setIds([...ids, components[0]]);
        components.splice( 0,1);
        
      } 
      setComponents((ids) => [...ids, components]);
    };
  
    const deleteHandeler = (removeId) =>
      setIds((ids) => ids.filter((id) => id !== removeId));
  return (
    

    <div >
        
    {ids.map((id) => (
      <Comp2 key={id} id={id} deleteHandeler={() => deleteHandeler(id)} />
      
    ))}

    <input className=' btn-primary'  type="button" id="add" value="Add" onClick={addHandeler}     />

  </div>
  

  )
}

export default Comp1

  
    
      
    