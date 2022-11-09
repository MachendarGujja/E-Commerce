import {useContext} from 'react'
import { CartData } from '../Context'
import Product from './Product'

const Favorite = () => {
    const {fav} = useContext(CartData)
  return (
    <div >
        {fav.length>0?
        <ul className='card-css'> 
            {fav&&fav.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:<div className='cartt'>
        <h1 style={{color:'black'}}>No items in Favorite</h1>
        </div>}
    </div>
  )
}

export default Favorite