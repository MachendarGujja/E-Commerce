import '../components/Header.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
// import Button from 'react-bootstrap/esm/Button';
import Badge from "@mui/material/Badge";
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CartData } from '../Context';
export default function Header({loginFunction,user}){
  const {cart} = useContext(CartData)
    return(
        <div className="header-css">
        <div className='name-css'>
        <h6 style={{marginLeft:5}}>{`Hello, ${user.firstName} ${user.lastName}`}</h6>
        </div>
        <div >
        <Link to='/' >
        <img className="icon-img" title='Go to Home' src="https://media.designrush.com/inspiration_images/136099/conversions/_1513769278_678_Prada_Logo_865cc60eea8d-desktop.jpg" alt="icon"/>
        </Link>
        </div>
        <div className='options-list'>
        <Link to='/'  style={{marginRight:15,color:'black',textDecoration:'none'}}>
        <h5 className='stores'>STORES</h5>
        </Link>
        <Link  style={{marginRight:20,color:'black',textDecoration:'none'}}>
        <h5 className='help'>HELP</h5>
        </Link>
        <Link to='/cart'>
        <Badge style={{cursor:'pointer',marginRight:10}}   color="secondary" badgeContent={cart.length}>
          <AddShoppingCartTwoToneIcon style={{color:'black'}} titleAccess='Cart'/>{" "}
        </Badge>{" "}
        </Link>
        <Link to='/favorite' style={{textDecoration: 'none',marginRight:10}}>
        <FavoriteBorderIcon style={{color:'black'}} titleAccess='Favorites'/>
        </Link>
        <Person2OutlinedIcon titleAccess='Account' className='User'  style={{cursor:'pointer',marginRight:10}}/>
        <LogoutIcon  titleAccess='Log out' style={{color:'black',cursor:'pointer'}} onClick={()=>loginFunction(false)}>Log Out</LogoutIcon>
        </div>
        </div>
    )
    }