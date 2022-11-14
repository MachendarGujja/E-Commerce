import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Product from './Product';
import {Form} from 'react-bootstrap';
import './Products.css';
// import {useState} from 'react';
import { CartData } from '../Context';
const Products = () => {
    const {main:{products,search}}=CartData()
    const {filter:{price,fastDel,byStock},dispatchFilter} = CartData()
    // console.log(button);
    const productFun=()=>{
      let newList = products;
      if(search){
           newList = newList.filter((e)=>e.name.toLowerCase().includes(search))
          // dispatchMain({type:'CHANGE'})
      }
      if(price){
        newList = newList.sort((cur,nxt)=>price === 'lowtohigh'?cur.price - nxt.price:nxt.price - cur.price)
        }
      if(fastDel){
          newList = newList.filter((e)=>e.fastDelivery)
      }
      if(!byStock){
        newList = newList.filter((e)=>e.inStock)
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
      <Form.Check
            inline
            label="fast delivery"
            name="group1"
            type='checkbox'
            id={`inline-1`}
            onChange={()=>dispatchFilter({type:'FAST',})}
            checked={fastDel}
            style={{cursor:'pointer'}}
          />
          <Form.Check
          style={{cursor:'pointer'}}
            inline
            label="Out of stock"
            name="group1"
            type='checkbox'
            id={`inline-2`}
            onChange={()=>dispatchFilter({type:'STOCK',})}
            checked={byStock}
          />
    </FormControl>
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