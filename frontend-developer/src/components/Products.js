import {useContext,useEffect,useState} from 'react';
// import axios from 'axios';
import Product from './Product';
import './Products.css'
import { CartData } from '../Context';
const Products = () => {
    const {products,search,button,setButton,category} = useContext(CartData)
    const [newList, setnewList] = useState([])
    const b = newList?newList:products;
    if(search.length === 0){
       setButton(false)
      }
    //   console.log(search);
    // const fetchBusinesses = useCallback(() => {
      
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      
      // const data = products;
      
      
      if(category){
        if(category === 'all'){
          const data = products;
          const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
      setnewList(newData)
        }
        else{
      const data = products;
      const newData = data.filter((e)=>e.category.toLowerCase().includes(category));
      setnewList(newData)
      if(button){
        const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
      setnewList(newData)
      }
        }
      }
    }, [button,category]) // eslint-disable-line react-hooks/exhaustive-deps
    // console.log(newData)
    
    
  return (
    <div className='css'>
        <div className='side-filter'>
            <h1>Hello</h1>
        </div>
        {b.length>0?<ul className='card-css'> 
            {b.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:<h3 className='no-css'>No Item Found</h3>}
    </div>
  )
}

export default Products