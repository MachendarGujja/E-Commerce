import {useContext,useState,useEffect} from 'react'
import { CartData } from '../Context'
import Product from './Product'

const Favorite = () => {
  const {fav,search,button,setButton} = useContext(CartData)
  const [newList, setnewList] = useState([])
  const b = newList?newList:fav;
  if(search.length === 0){
     setButton(false)
    }
  //   console.log(search);
  // const fetchBusinesses = useCallback(() => {
    
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const data = fav;
    const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
    setnewList(newData)
  }, [button,fav])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div >
        {b.length>0?
        <ul className='card-css'> 
            {b.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:<div className='cartt'>
        <h1 style={{color:'black'}}>No items in Favorite</h1>
        </div>}
    </div>
  )
}

export default Favorite