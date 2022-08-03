import React from "react";
import Contacts from "./components/contacts/contacts";
import Header from "./components/header/Header";
import ContactsTable from './components/contacts/contactsTable';
import HoverCounter from "./components/hover-counter/hover-counter";
import Users from "./components/users/Users";
import User from "./components/user/User";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserContext from "./context/user-context";
import { useState } from "react";
import ContextComp from "./context/context-comp";
import ReduxComp from './components/redux-comp/redux-comp';
import Comp1 from "./task/Comp1";
import Form from './components/Form/Form';
import NotFound from "./components/Not-found/NotFound";
import Login from './components/Login/Login';
import LoginContext from "./components/Login/LoginContext";
import ProtectedRoutes from './ProtectedRoutes';
import NewParent from "./components/new-parent/new-parent";
import MemoCounter from "./components/memo-counter/memo-counter";
const LazyBigComp=React.lazy(()=>import("./components/big-comp/big-comp"))


function App() {
  const[data,setData]=useState({userName:"Urvesh",usersCount:0});
  const updateData =(key,value)=>{
    setData({
      ...data,[key]:value
    })
  }
  const LoginData=(e)=>{
    console.log("Context email",e.email)
  }
  return (
    <BrowserRouter>
    <UserContext.Provider value={{getData : data, setData : updateData}}>
      <LoginContext.Provider value={{setLogin:LoginData}}>
    <Header/>
     <Routes>
<Route path="/" element={<Login/>}></Route>
{/* <Route element={<ProtectedRoutes/>}>  */}
<Route path="/contacts" element={<ContactsTable/>}></Route>
<Route path="/counter" element={<HoverCounter/>}></Route>
<Route path="/context" element={<ContextComp/>}></Route>
<Route path="/users" element={<Users/>}></Route>
<Route path="/redux" element={<ReduxComp/>}></Route>
<Route path="/users/:id" element={<User/>}></Route>
<Route path="/comp" element={<Comp1/>}></Route>
<Route path="/callback" element={<NewParent/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/memo" element={<MemoCounter/>}></Route>
  {/* </Route> */}
<Route path="/form" element={<Form/>}></Route>

<Route path="/big" element={<React.Suspense fallback="Loading..."><LazyBigComp></LazyBigComp></React.Suspense>}></Route>
<Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </LoginContext.Provider>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
