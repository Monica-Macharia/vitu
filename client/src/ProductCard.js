import React, {useEffect, useState} from "react";
import "./ProductCard.css"
import ProductDisplay from "./ProductDisplay";

function ProductCard({ product, products }) {

    const [display, setDisplay] = useState([])

    


    // function handleFetcher(id) {
    //     fetch(`/products/${id}`)
    //       .then((res) => res.json())
    //       .then((data) => setDisplay(data));
    //   }

//    const handleClick = () => {
//         handleFetcher(product.id); // Pass the product ID as a parameter to handleFetcher
//       }
    return (
        
         <>
          {/* {display.map(displays =>(
               
               
             
               <ProductDisplay display = {displays}/>
               
               
           ))} */}
           
        
               <div class="g-col-12">
                     <img  class="center" style={{height: 220 + "px",width:220 + "px"}} src={product.image} className="card-img-top" alt={product.name} title={product.name}/>
                    <p>by Vizuri store</p>
                 
                </div>
                </>
    )

    
}

export default ProductCard;