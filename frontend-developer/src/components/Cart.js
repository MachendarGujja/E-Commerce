import {useState,useEffect} from 'react'
import { CartData } from '../Context';
import CartProduct from './CartProduct';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../components/Cart.css'

const Cart = () => {
    const [total, setTotal] = useState(0)
    const {main:{cart,search,button}} = CartData()
    const productFun=()=>{
      let newList = cart;
      if(button){
        newList = newList.filter((e)=>e.name.toLowerCase().includes(search))
      }
       if(!button){
        newList=cart;
       }
      return newList;
    }
    useEffect(() => {
      setTotal(cart.reduce((tot,cur)=>tot+parseInt((cur.price*80)*cur.qty), 0));
    }, [cart])// eslint-disable-line react-hooks/exhaustive-deps
    // console.log(pay);
  return (
    <div className='css-cartt'>
        <div className='ss'>
        {productFun().length>0?
        <ul className='card-cssss'> 
            {productFun()?.map((e)=>(
                <CartProduct product={e} key={e.id} />
            ))}
        </ul>:
        <div className='carttt'>
        <h1 style={{color:'black'}}>No items in Cart</h1>
        <Button><Link to='/products' style={{color:'white',textDecoration: 'none'}}>Shop Now</Link></Button>
        </div>
        }
        </div>
        <div className='second-pricec'>
            <h5 style={{marginTop:7,marginBottom:10}}>Total Selected Item's : {cart.length}</h5>
            <h5 style={{color:'black',marginRight:8}}>Total Price : {total}</h5>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:17}}>
              {
                  cart.length === 0? <Button disabled>Proceed to Payment</Button>: 
                  <Button >Proceed to Payment</Button>
              }
              {cart.length > 0?
           <><h7>(OR)</h7>
            <Button style={{width:170}}><Link to='/products' style={{color:'white',textDecoration: 'none'}}>Shop More</Link></Button>
              </>:''}</div>
            
        </div>
    </div>
  )
}

export default Cart