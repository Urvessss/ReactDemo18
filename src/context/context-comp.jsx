
import UserContext from './user-context'
import { useContext } from 'react'
const ContextComp = () => {
    let value= useContext(UserContext);
  return (
    <>
    <h3>Context Value:{value.getData.userName}</h3>
    <h3>COUNT:{value.getData.usersCount}</h3>
    <button onClick={()=>value.setData('usersCount',value.getData.usersCount +1)}>INCREMENT</button>
    </>
  )
}

export default ContextComp;