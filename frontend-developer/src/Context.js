import { createContext,useReducer ,useContext,useState} from 'react';
import { mainReducer } from './Reducer';
import axios from 'axios';
const Cart = createContext();
const Context = ({children}) => {
    const [data,setData] = useState('');
    // const [button,setButton] = useState(false)
    // const [category, setCategory] = useState('all')
  
    const productApi = async() =>{
      let data = await axios.get('https://fakestoreapi.com/products?sort=desc');
      setData(data)
    }
  const [main, dispatchMain] = useReducer(mainReducer,{
    products:data,
    cart:[],
    fav:[],
    search:'',
    button:false,
    category:'all',
  })
  
  return (
    <Cart.Provider value={{main,dispatchMain}}>{children}</Cart.Provider>
  )
}

export const CartData = () =>{
  return useContext(Cart)
}

export default Context