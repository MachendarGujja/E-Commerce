// import {useContext,useEffect,useState} from 'react';
// import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Product from './Product';
import './Products.css'
import { CartData } from '../Context';
const Products = () => {
    // const {search,button,setButton,category} = useContext(Cart)
    const {main:{products}}=CartData()
    console.log(products);
    // const [newList, setnewList] = useState([])
    // const b = newList?newList:products;
    // if(search.length === 0){
    //    setButton(false)
    //   }

    // useEffect(() => {
    //   if(category){
    //     if(category === 'all'){
    //       const data = products;
    //   setnewList(data)
    //   // setSearch('')
    //   // setButton(false)
    //   if(button && search.length>0){
    //     const data = newList;
    //     const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
    //   setnewList(newData)
    //   // setButton(false)
    //   // setSearch('')
    //   }
    //     }
    //     else{
    //   const data = products;
    //   const newData = data.filter((e)=>e.category.toLowerCase().includes(category));
    //   setnewList(newData)
    //   // setSearch('')
    //   if(button){
    //     const data = newList;
    //     const newData = data.filter((e)=>e.title.toLowerCase().includes(search));
    //   setnewList(newData)
    //   // setButton(false)
    //   // setSearch('')
    //   }
    //     }
    //   }
      
    // }, [category,button]) // eslint-disable-line react-hooks/exhaustive-deps
    // console.log(price)
    
    
  return (
    <div className='css'>
        <div className='side-filter'>
            <FormControl >
      <FormLabel id="demo-radio-buttons-group-label">Select Price :</FormLabel>
      <RadioGroup 
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue='none'
      >
        <FormControlLabel value="lowtohigh" control={<Radio />} label="LowToHigh" />
        <FormControlLabel value="hightolow"  control={<Radio />} label="HighToLow" />
        <FormControlLabel value="none"  control={<Radio />} label="None" />
      </RadioGroup>
    </FormControl>
        </div>
        {products.length>0?<ul className='card-css'> 
            {products.map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>:<h3 className='no-css'>No Item Found</h3>}
    </div>
  )
}

export default Products