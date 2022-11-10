import {useContext,useEffect,useState} from 'react';
// import axios from 'axios';
import Product from './Product';
import './Products.css'
import { CartData } from '../Context';
const Products = () => {
    const {products,search,button,setButton} = useContext(CartData)
    const [newList, setnewList] = useState([])
    const b = newList?newList:products;
    if(search.length === 0){
       setButton(false)
      }
    //   console.log(search);
    // const fetchBusinesses = useCallback(() => {
      
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      const data = products;
      const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
      setnewList(newData)
    }, [button]) // eslint-disable-line react-hooks/exhaustive-deps
    // console.log(newData)
    
    
  return (
    <div className='css'>
        <div className='side-filter'>
            <h1>Hello</h1>
        </div>
        <ul className='card-css'> 
            {b.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>
    </div>
  )
}

export default Products