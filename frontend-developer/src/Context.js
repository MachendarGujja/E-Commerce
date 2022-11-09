import { createContext,useState } from 'react';
import axios from 'axios';
export const CartData = createContext();
const Context = ({children}) => {
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);
  
    const productApi = async() =>{
      const data = await axios.get('https://fakestoreapi.com/products');
      setProducts(data.data);
  }
  const [products,setProducts]=useState(productApi)
  
  return (
    <CartData.Provider value={{fav,setFav,cart,setCart,products}}>{children}</CartData.Provider>
  )
}

export default Context