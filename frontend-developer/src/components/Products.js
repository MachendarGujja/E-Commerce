import {useContext} from 'react';
// import axios from 'axios';
import Product from './Product';
import './Products.css'
import { CartData } from '../Context';
const Products = () => {
    const {products} = useContext(CartData)

    //   console.log(products);
  return (
    <div className='css'>
        <ul className='card-css'> 
            {products.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>
    </div>
  )
}

export default Products