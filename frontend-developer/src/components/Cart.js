import {useState,useEffect} from 'react'
import { CartData } from '../Context';
import Product from './Product';
import '../components/Cart.css'

const Cart = () => {
    const [total, setTotal] = useState(0)
    const {main:{cart}} = CartData()
    useEffect(() => {
      
      setTotal(cart.reduce((tot,cur)=>tot+parseInt(cur.price*80), 0));
    }, [cart])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className='css-cartt'>
        <div className='ss'>
        {cart.length>0?
        <ul className='card-csss'> 
            {cart.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:
        <div className='carttt'>
        <h1 style={{color:'black'}}>No items in Cart</h1>
        </div>}
        </div>
        <div className='second-pricec'>
            <h5 style={{color:'black',marginRight:5}}>Total Price :</h5>
            <h5>{total}</h5>
        </div>
    </div>
  )
}

export default Cart