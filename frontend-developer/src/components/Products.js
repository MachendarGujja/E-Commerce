import {useContext,useEffect} from 'react';
// import axios from 'axios';
import Product from './Product';
import './Products.css'
import { CartData } from '../Context';
const Products = () => {
    const {products,search,button,setButton,empty,setEmpty} = useContext(CartData)
    // const [newList, setnewList] = useState([])
    const b = button?empty:products;
    if(search.length === 0){
       const data = ()=> setButton(false)
       data()
      }
    //   console.log(search);
    useEffect(() => {
        const data = products;
      const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
      
      const dataa = ()=>setEmpty(newData)
       dataa()
    }, [button,products])
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