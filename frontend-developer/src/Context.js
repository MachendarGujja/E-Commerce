import { createContext,useReducer ,useContext} from 'react';
import { mainReducer,filterReducer } from './Reducer';
import faker from 'faker';
const Cart = createContext();
faker.seed(100);
const Context = ({children}) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [main, dispatchMain] = useReducer(mainReducer,{
    products:products,
    cart:[],
    fav:[],
    search:'',
    button:false,
  })
  const [filter, dispatchFilter] = useReducer(filterReducer,{
    price:'',
    fastDelivery:false,
  })
  
  return (
    <Cart.Provider value={{main,dispatchMain,filter,dispatchFilter}}>{children}</Cart.Provider>
  )
}

export const CartData = () =>{
  return useContext(Cart)
}

export default Context