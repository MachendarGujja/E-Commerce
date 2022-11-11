import {useContext,useState,useEffect} from 'react'
import { CartData } from '../Context'
import Product from './Product'
import '../components/Cart.css'

const Cart = () => {
    const {cart,search,setSearch,button,setButton,category} = useContext(CartData)
    const [newList, setnewList] = useState([])
    const [total, setTotal] = useState()
    const b = newList?newList:cart;
    // console.log(cart)
    if(search.length === 0){
       setButton(false)
    }
    console.log(button);
    useEffect(() => {
      if(category){
        if(category === 'all'){
          const data = cart;
      setnewList(data)
      // setSearch('')
      // setButton(false)
      if(button && search.length>0){
        const data = newList;
        const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
      setnewList(newData)
      // setButton(false)
      // setSearch('')
      }
        }
        else{
      const data = cart;
      const newData = data.filter((e)=>e.category.toLowerCase().includes(category));
      setnewList(newData)
      // setSearch('')
      if(button){
        const data = newList;
        const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
      setnewList(newData)
      // setButton(false)
      // setSearch('')
      }
        }
      }
      
      
      setTotal(cart.reduce((tot,cur)=>tot+parseInt(cur.price*80), 0));
    }, [button,cart,category])// eslint-disable-line react-hooks/exhaustive-deps
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
            <h5 style={{color:'black',marginRight:5}}>Total Price :</h5>
            <h5>{total}</h5>
        </div>
    </div>
  )
}

export default Cart