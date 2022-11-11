import {useContext,useState,useEffect} from 'react'
import { CartData } from '../Context'
import Product from './Product'

const Favorite = () => {
  const {fav,search,button,setButton,category} = useContext(CartData)
  const [newList, setnewList] = useState([])
  const b = newList?newList:fav;
  if(search.length === 0){
     setButton(false)
    }
  //   console.log(search);
  // const fetchBusinesses = useCallback(() => {
    
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if(category){
      if(category === 'all'){
        const data = fav;
        const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
    setnewList(newData)
      }
      else{
    const data = fav;
    const newData = data.filter((e)=>e.category.toLowerCase().includes(category));
    setnewList(newData)
    if(button){
      const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
    setnewList(newData)
    }
      }
    }
  }, [button,fav,category])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div >
        {b.length>0?
        <ul className='card-css'> 
            {b.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:<div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{color:'black'}}>No items in Favorite</h1>
        </div>}
    </div>
  )
}

export default Favorite