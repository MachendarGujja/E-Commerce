import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Product from './Product';
import {Form} from 'react-bootstrap'
import './Products.css';
// import {useState} from 'react';
import { CartData } from '../Context';
const Products = () => {
    const {main:{products,search},filter:{price,fastDelivery},dispatchFilter}=CartData()
    // console.log(button);
    const productFun=()=>{
      let newList = products;
      if(search){
           newList = newList.filter((e)=>e.name.toLowerCase().includes(search))
          // dispatchMain({type:'CHANGE'})
      }
      if(price){
        newList = price === 'lowtohigh'?
        newList.sort((cur,nxt)=>cur.price - nxt.price):
        newList.sort((cur,nxt)=>nxt.price - cur.price)
        }
        if(fastDelivery){
          newList = newList.filter((e)=>e.fastDelivery)
        }
      console.log(newList);
      return newList;
    }
    
  return (
    <div className='css'>
        <div className='side-filter'>
            <FormControl >
      <FormLabel id="demo-radio-buttons-group-label">Select Price :</FormLabel>
      <RadioGroup 
        aria-labelledby="demo-radio-buttons-group-label"
        name="group1"
        
      >
        <FormControlLabel  onChange={(e)=>{dispatchFilter({type:'PRICE',payload:"lowtohigh"})}} checked={price==='lowtohigh'?true:false} control={<Radio />} label="LowToHigh" />
        <FormControlLabel  onChange={(e)=>{dispatchFilter({type:'PRICE',payload:"hightolow"})}} checked={price==='hightolow'?true:false} control={<Radio />} label="HighToLow" />
        {/* <FormControlLabel onChange={(e)=>{dispatchFilter({type:'PRICE',payload:"none"})}} checked={price==='none'?true:false} control={<Radio />} label="None" /> */}
      </RadioGroup>
      
    </FormControl>
    <Form.Check
            inline
            label="fast delivery"
            name="group1"
            type='checkbox'
            id={`inline-1`}
            onChange={dispatchFilter({type:'FAST',})}
            checked={fastDelivery}
          />
        </div>
        <div className='mid-css'>
          {productFun().length>0? 
        <ul className='card-css'> 
            {productFun().map((e)=>(
                <Product product={e} key={e.id} />
            ))}
        </ul>
        :<h3 className='no-css'>No Item Found</h3>
        }
        </div>
    </div>
  )
}

export default Products