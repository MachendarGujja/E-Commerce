import { useContext} from "react";
import { Link } from "react-router-dom";
import '../components/Home.css';
import {CartData} from '../Context';
// import faker from 'faker';

export default function Home(){
  
  const {setSearch} = useContext(CartData)

   
    return(
      <div className="home-css">
      <div className="top-image">
        <Link to='/products'>
        <button onClick={()=>setSearch('')} className="button"><span>Shop Now</span></button>
        </Link>
      </div>
      <div>
        <h3>Best Selling Products</h3>
      </div>
      {/* <h1>{cart}</h1> */}
      </div>
    )
  }