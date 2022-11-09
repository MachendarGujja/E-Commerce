import { createContext,useState } from 'react';
import axios from 'axios';
export const CartData = createContext();
const Context = ({children}) => {
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);
    const [search,setSearch] = useState('');
    const [button,setButton] = useState(false)
    const [empty,setEmpty] = useState()
  
    const productApi = async() =>{
      const data = await axios.get('https://fakestoreapi.com/products');
      setProducts(data.data);
  }
  const [products,setProducts]=useState(productApi)
  
  return (
    <CartData.Provider value={{empty,setEmpty,search,setSearch,fav,setFav,cart,setCart,products,button,setButton}}>{children}</CartData.Provider>
  )
}

export default Context