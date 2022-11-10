import {useContext,useState,useEffect} from 'react'
import { CartData } from '../Context'
import Product from './Product'
import '../components/Cart.css'

const Cart = () => {
    const {cart,search,button,setButton} = useContext(CartData)
    const [newList, setnewList] = useState([])
    const b = newList?newList:cart;
    if(search.length === 0){
       setButton(false)
      }
    //   console.log(search);
    // const fetchBusinesses = useCallback(() => {
      
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      const data = cart;
      const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
      setnewList(newData)
    }, [button])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className='css-cartt'>
        <div className='ss'>
        {b.length>0?
        <ul className='card-csss'> 
            {b.map((e)=>(
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