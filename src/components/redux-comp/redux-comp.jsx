import { connect } from 'react-redux';
import { checkChange, incrementNumber,decrementNumber, setUserName} from './../../redux/actionCreater';
import { useState } from 'react';
import { asyncTask } from '../../redux/asyncTask';

const ReduxComp=(props)=>{
    const[userName,setUserName]=useState('')
    return(
        <>
<h2>User Name:{props.name}</h2>
<h3>Num:{props.num}</h3>
<input type='text' placeholder='Enter UserName' value={userName} 
onChange={(e)=>setUserName(e.target.value)}/><br/>
<button onClick={()=>props.setUserName(userName)}>Set User</button>

        <h3>Num:{props.num}</h3>
        <button onClick={props.onIncrementNum}>INCREMENT</button>
        <button onClick={props.onDecrementNum}>DECREMENT</button>
        <br/>
        
        <input type="checkbox" checked={props.checked}onChange={props.onCheckChange}/>Checked
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        checked:state.checked,
        num:state.count,
        name:state.userName
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        // onIncrementNum:()=>dispatch(incrementNumber(5)),
        onIncrementNum:()=>dispatch(asyncTask()),

        onDecrementNum:()=>dispatch(decrementNumber(2)),
        onCheckChange:()=>dispatch(checkChange()),
        setUserName:(payload)=>dispatch(setUserName(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxComp)