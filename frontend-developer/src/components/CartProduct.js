import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { CartData } from '../Context';
import StarRating from './StarRating';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './Cart.css'

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
    <li className='cardsss'>
        <img style={{width:150,marginRight:10,borderTopLeftRadius:3,borderBottomLeftRadius:3}} src={product.image} alt={product.title}/>
        <div className='midcss'>
        <h4 style={{width:280}}>{product.name.length>35?`${product.title.substring(0,17)}...`:`${product.name}`}</h4>
        <h5>&#8377; {parseInt(product.price*80)}</h5>
        {/* <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',width:'100%'}}> */}
        <div className='starcss'>
            <div>
        <StarRating data={product.ratings}/>
            </div>
            <div>
        <p style={{marginLeft:8}}>{product.fastDelivery?'Fast Delivery':'3 Days late'}</p>
            </div>
        </div>
        {/* </div> */}
        </div>
        <div>
        <Box sx={{ minWidth: 70,marginTop:4,marginBottom:1 }}>
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
          style={{width:50}}
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
        <button style={{width:150,height:40}} className='but' onClick={()=>dispatchMain({type:'REMOVE_FROM_CART',payload:product,})}>Remove from Cart</button>:
        <button className='but' onClick={()=>dispatchMain({type:'ADD_TO_CART',payload:product,})} disabled={byStock}>{byStock?'Out of Stock':'Add to Cart'}</button>}
        </div>
        <div style={{marginTop:115,marginLeft:320}}>
        {fav.find((f)=>f.id === product.id)?
        <button onClick={()=>dispatchMain({type:'REMOVE_FROM_FAV',payload:product})}><FavoriteSharpIcon style={{color:'red'}}/></button>:
        <button onClick={()=>dispatchMain({type:'ADD_TO_FAV',payload:product})}><FavoriteSharpIcon style={{color:'white'}}/></button>}
        </div>
    </li>
  )
}

export default CartProduct