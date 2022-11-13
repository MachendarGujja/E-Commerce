import { Link } from "react-router-dom";
import '../components/Home.css';


export default function Home(){
   
    return(
      <div className="home-css">
      <div className="top-image">
        <Link to='/products'>
        <button className="button"><span>Shop Now</span></button>
        </Link>
      </div>
      <div>
        <h3>Best Selling Products</h3>
      </div>
      {/* <h1>{cart}</h1> */}
      </div>
    )
  }