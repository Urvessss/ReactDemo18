
import './Header.css'
import {Link} from 'react-router-dom'
const Header =()=>{
    
    return(
<div className='heading'>
    {/* <h2>Welcome to Header {appName}</h2> */}
    <Link to="/">Home</Link>&nbsp;
    <Link to="/counter">Counter</Link>&nbsp;
    <Link to="/contacts">Contacts</Link>&nbsp;
    <Link to="/users">Users</Link>&nbsp;
    <Link to="/context">Context</Link>&nbsp;
    <Link to="/redux">Redux</Link>&nbsp;
    <Link to="/comp">Comp</Link>&nbsp;
    <Link to="/form">Form</Link>&nbsp;
    <Link to="/big">BigComp</Link>&nbsp;
    <Link to="/login">Login</Link>&nbsp;
    <Link to="/callback">NewParent</Link>&nbsp;
    <Link to="/memo">MemoCounter</Link>&nbsp;
    
    

</div>
    );
}
export default Header;