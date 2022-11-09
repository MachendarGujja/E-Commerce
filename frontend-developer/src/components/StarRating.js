// import { useState } from "react";
import './Products.css'

export default function StarRating({data}) {
    const rating = [data];
    // const [hover, setHover] = useState(data);

    return (
      <div style={{marginBottom:20}} className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
            style={{fontSize:25,width:21}}
              type="button"
              key={index}
              className={index <= ( rating) ? "on" : "off"}
            //   onClick={() => setRating(index)}
            //   onMouseEnter={() => setHover(index)}
            //   onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
        
      </div>
    );
  };