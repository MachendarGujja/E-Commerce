// import {useContext,useState,useEffect} from 'react'
import { CartData } from '../Context'
import Product from './Product'

const Favorite = () => {
  const {main:{fav,search}} = CartData()
    const productFun=()=>{
      let newList = fav;
      if(search){
           newList = newList.filter((e)=>e.name.toLowerCase().includes(search))
          // dispatchMain({type:'CHANGE'})
      }
      return newList;
    }
  return (
    <div >
        {productFun().length>0?
        <ul className='card-css'> 
            {productFun().map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:<div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{color:'black'}}>No items in Favorite</h1>
        </div>}
    </div>
  )
}

export default Favorite