import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { CartData } from '../Context';
import StarRating from './StarRating';
import './Products.css'

const Product = ({product}) => {
    const {
        main:{
            cart,fav
        },
        filter:{
            byStock
        },
        dispatchMain} = CartData();

    // console.log(product);
  return (
    <li className='cards'>
        <img style={{width:'100%',height:138,borderTopLeftRadius:4,borderTopRightRadius:4}} src={product.image} alt={product.title}/>
        <div className='bot-css'>
          <div style={{marginTop:10}}>
        {product.name.length>35?`${product.title.substring(0,17)}...`:`${product.name}`}
          </div>
        <div className='midcsss'>
          <div>
        <h5>&#8377; {parseInt(product.price*80)}</h5>
          </div>
        <div>
        
        {cart.some((p)=>p.id === product.id)?
        <button className='but' onClick={()=>dispatchMain({type:'REMOVE_FROM_CART',payload:product,})}>Remove from Cart</button>:
        <button className='but' onClick={()=>dispatchMain({type:'ADD_TO_CART',payload:product,})} disabled={byStock}>{byStock?'Out of Stock':'Add to Cart'}</button>}
        </div>
        </div>
        <div className='starcss'>
        <StarRating   data={product.ratings}/>
            </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
            <div>
        <p style={{fontSize:12,marginLeft:13}}>{product.fastDelivery?'Fast Delivery':'3 Days late'}</p>
            </div>
        <div >
          
        {fav.find((f)=>f.id === product.id)?
        <button  onClick={()=>dispatchMain({type:'REMOVE_FROM_FAV',payload:product})}><FavoriteSharpIcon style={{color:'red'}}/></button>:
        <button  onClick={()=>dispatchMain({type:'ADD_TO_FAV',payload:product})}><FavoriteSharpIcon style={{color:'white'}}/></button>}
        </div>
        </div>
        </div>
    </li>
  )
}

export default Product