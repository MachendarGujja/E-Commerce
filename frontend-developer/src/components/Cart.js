import {useContext} from 'react'
import { CartData } from '../Context'
import Product from './Product'
import '../components/Cart.css'

const Cart = () => {
    const {cart} = useContext(CartData)
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
            <h1 style={{color:'black'}}>Hello</h1>
        </div>
    </div>
  )
}

export default Cart