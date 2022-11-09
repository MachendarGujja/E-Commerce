import {useContext} from 'react';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { CartData } from '../Context';
import StarRating from './StarRating';
import './Products.css'

const Product = ({product}) => {
    const {cart,setCart,fav,setFav} = useContext(CartData);
    // console.log(fav);
  return (
    <li className='cards'>
        <img style={{width:100,height:120,marginTop:3,marginBottom:3}} src={`${product.image}`} alt={product.title}/>
        <div className='bot-css'>
        {product.title.length>35?`${product.title.substring(0,17)}...`:`${product.title}`}
        <div className='midcss'>
        <h5>&#8377; {parseInt(product.price*80)}</h5>
        <div>
        {cart.includes(product)?
        <button className='but' onClick={()=>setCart(cart.filter((e)=>e.id !== product.id))}>Remove from Cart</button>:
        <button className='but' onClick={()=>setCart([...cart,product])}>Add to Cart</button>}
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',width:'100%'}}>
        <div className='starcss'>
            <div>
        <StarRating data={product.rating.rate}/>
            </div>
            <div>
        <p style={{marginLeft:8}}>({product.rating.count})</p>
            </div>
        </div>
        <div>
        {fav.includes(product)?
        <button  onClick={()=>setFav(fav.filter((e)=>e.id !== product.id))}><FavoriteSharpIcon style={{color:'red'}}/></button>:
        <button className='' onClick={()=>setFav([...fav,product])}><FavoriteSharpIcon style={{color:'white'}}/></button>}
        </div>
        </div>
        </div>
    </li>
  )
}

export default Product