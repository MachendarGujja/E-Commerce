// import {useContext,useState,useEffect} from 'react'
import { CartData } from '../Context'
import Product from './Product'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Cart.css'

const Favorite = () => {
  const {main:{fav,search,button}} = CartData()
    const productFun=()=>{
      let newList = fav;
      // if(search){
      //      newList = newList.filter((e)=>e.name.toLowerCase().includes(search))
      //     // dispatchMain({type:'CHANGE'})
      // }
      if(button){
        newList = newList.filter((e)=>e.name.toLowerCase().includes(search))
      }
       if(!button){
        newList=fav;
       }
      return newList;
    }
  return (
    <div className='fav-css'>
        {productFun().length>0?
        <ul className='card-fav'> 
            {productFun().map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:<div style={{height:'100vh',width:'100vw',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{color:'black'}}>No items in Favorite</h1>
        <Button><Link to='/products' style={{color:'white',textDecoration: 'none'}}>Shop Now</Link></Button>
        </div>}
    </div>
  )
}

export default Favorite