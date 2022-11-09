// import { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import '../components/Home.css';
// import {CartData} from '../Context';
// import faker from 'faker';

export default function Home(){
  
  // const {cart} = useContext(CartData)

  // const productsFaker = [...Array(20)].map((each)=>({
  //       id:faker.datatype.uuid(),
  //       productName:faker.commerce.productName(),
  // }))
  

   
    return(
      <div className="home-css">
      <div className="top-image">
        <Link to='/products'>
        <button className="button"><span>Shop Now</span></button>
        </Link>
      </div>
      {/* <h1>{cart}</h1> */}
      </div>
    )
  }