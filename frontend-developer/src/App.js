import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Header from './components/Header';
import Signin from './components/Signin';
import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Profile from './components/Profile';
import Help from './components/Help';
// import { CartData } from './Context';
// import { useContext } from 'react';


export default function App(){

  const list_of_users = [
    {
      id:uuid(),
      firstName:'Rohith',
      lastName:'Raj',
      mail:'rohith@gmail.com',
      pass:'123',
    },
    {
      id:uuid(),
      firstName:'Suman',
      lastName:'K',
      mail:'suman@gmail.com',
      pass:'123',
    },
    {
      id:uuid(),
      firstName:'Suman',
      lastName:'K',
      mail:'',
      pass:'',
    }
  ];

  const [list,setList]=useState(list_of_users);
  const [userName,setUserName]=useState();
  const [login,setLogin]=useState(false);
// const {search,setSearch} = useContext(CartData)

  const registerButton = (i) =>{
    setList(prev=>[...prev,i]);
  }
  const loginFunction = (i,j) =>{
    setLogin(i);
    setUserName(j)
  }
  // setSearch('')
    useEffect(()=>{
      
  },[list,login])
  // console.log(login)
  

  return(
     <BrowserRouter>
     {login && <Header user={userName} loginFunction={loginFunction}/>}
     <Routes>
      <Route exact path='/' element={login?<Home />:<Navigate replace to={'/signin'}/>}/>
      <Route path='/signin' element={login?<Navigate replace to={'/'}/>:<Signin data={list} loginFunction={loginFunction}/>}/>
      <Route path='/register'  element={<Register registerButton={registerButton}/>}/>
      <Route path='/products'  element={login?<Products />:<Navigate replace to={'/signin'}/>}/>
      <Route path='/cart'  element={login?<Cart />:<Navigate replace to={'/signin'}/>}/>
      <Route path='/favorite'  element={login?<Favorite />:<Navigate replace to={'/signin'}/>}/>
      <Route path='/profile'  element={login?<Profile />:<Navigate replace to={'/signin'}/>}/>
      <Route path='/help'  element={login?<Help />:<Navigate replace to={'/signin'}/>}/>
     </Routes>
     </BrowserRouter>
  )
}