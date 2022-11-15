import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { CartData } from '../Context';
import StarRating from './StarRating';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './Products.css'

const CartProduct = ({product}) => {
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
    <li className='cardss'>
        <img style={{width:100,height:120,marginTop:3,marginBottom:3}} src={product.image} alt={product.title}/>
        <div className='bot-css'>
        {product.name.length>35?`${product.title.substring(0,17)}...`:`${product.name}`}
        <div className='midcss'>
        <h5>&#8377; {parseInt(product.price*80)}</h5>
        <div>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Select Qty:
        </InputLabel>
        <NativeSelect
          defaultValue={product.qty}
          inputProps={{
            name: 'qty',
            id: 'uncontrolled-native',
          }}
          onChange={(e)=>dispatchMain({type:'CHANGE_QTY',payload:{
            id:product.id,
            qty:e.target.value}})}
        >{[...Array(product.inStock)].map((_,i)=>
          <option key={i} value={i+1}>{i+1}</option>)
        }
        </NativeSelect>
      </FormControl>
    </Box>
        {cart.some((p)=>p.id === product.id)?
        <button className='but' onClick={()=>dispatchMain({type:'REMOVE_FROM_CART',payload:product,})}>Remove from Cart</button>:
        <button className='but' onClick={()=>dispatchMain({type:'ADD_TO_CART',payload:product,})} disabled={byStock}>{byStock?'Out of Stock':'Add to Cart'}</button>}
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',width:'100%'}}>
        <div className='starcss'>
            <div>
        <StarRating data={product.ratings}/>
            </div>
            <div>
        <p style={{marginLeft:8}}>{product.fastDelivery?'Fast':'3 Days late'}</p>
            </div>
        </div>
        <div>
        {fav.find((f)=>f.id === product.id)?
        <button onClick={()=>dispatchMain({type:'REMOVE_FROM_FAV',payload:product})}><FavoriteSharpIcon style={{color:'red'}}/></button>:
        <button onClick={()=>dispatchMain({type:'ADD_TO_FAV',payload:product})}><FavoriteSharpIcon style={{color:'white'}}/></button>}
        </div>
        </div>
        </div>
    </li>
  )
}

export default CartProduct