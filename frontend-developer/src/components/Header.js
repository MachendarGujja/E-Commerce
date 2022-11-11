import '../components/Header.css';
import {Link} from 'react-router-dom';
import { useContext,useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Badge from "@mui/material/Badge";
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
// import LogoutIcon from '@mui/icons-material/Logout';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CartData } from '../Context';
import Button from 'react-bootstrap/esm/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function Header({loginFunction,user}){
  const {cart,setSearch,search,setButton,category, setCategory} = useContext(CartData);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  // console.log(anchorEl);
    return(
        <div className="header-css">
        {/* <div className='name-css'>
        <h6 style={{marginLeft:5}}>{`Hello, ${user.firstName} ${user.lastName}`}</h6>
        </div> */}
        <div >
        <Link to='/' >
        <img className="icon-img" onClick={()=>{setSearch('');setCategory('all')}} title='Go to Home' src="https://media.designrush.com/inspiration_images/136099/conversions/_1513769278_678_Prada_Logo_865cc60eea8d-desktop.jpg" alt="icon"/>
        </Link>
        </div>
        <div style={{display:'flex',height:40}}>
        <Box sx={{ minWidth: 120,height:40 }}>
      <FormControl fullWidth style={{height:40}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'all'} >All</MenuItem>
          <MenuItem value={"men's clothing"} >Men's clothing</MenuItem>
          <MenuItem value={"women's clothing"} >Women's clothing</MenuItem>
          <MenuItem value={'jewelery'} >Jewelory</MenuItem>
          <MenuItem value={"electronics"} >Electronics</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <Form.Control  className='in-css' value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search anything..." />
        <Button onClick={()=>setButton(true)}>Search</Button>
        </div>
        <div className='options-list'>
        <Link to='/'  style={{marginRight:15,color:'black',textDecoration:'none'}}>
        <h5 className='stores' onClick={()=>{setSearch('');setCategory('all')}}>STORES</h5>
        </Link>
        <Link to='/help'  style={{marginRight:20,color:'black',textDecoration:'none'}}>
        <h5 className='help' onClick={()=>{setSearch('');setCategory('all')}}>HELP</h5>
        </Link>
        <Link to='/cart'>
        <Badge style={{cursor:'pointer',marginRight:10}}   color="secondary" badgeContent={cart.length}>
          <AddShoppingCartTwoToneIcon onClick={()=>{setSearch('');setCategory('all')}} style={{color:'black'}} titleAccess='Cart'/>{" "}
        </Badge>{" "}
        </Link>
        <Link to='/favorite' style={{textDecoration: 'none',marginRight:10}}>
        <FavoriteBorderIcon onClick={()=>{setSearch('');setCategory('all')}} style={{color:'black'}} titleAccess='Favorites'/>
        </Link>
        <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{backgroundColor:'white',color:'black',border:'none'}}
      >
        <Person2OutlinedIcon titleAccess='Account' className='User'  style={{cursor:'pointer',marginRight:10}}/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} ><Link to='/profile' style={{textDecoration:'none',color:'black'}}>Profile</Link></MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleClose}><Link onClick={()=>loginFunction(false)} style={{textDecoration:'none',color:'black'}} to='/'>Log Out</Link></MenuItem>
      </Menu>
    </div>
        {/* <LogoutIcon  titleAccess='Log out' style={{color:'black',cursor:'pointer'}} onClick={()=>loginFunction(false)}>Log Out</LogoutIcon> */}
        </div>
        </div>
    )
    }