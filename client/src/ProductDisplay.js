import CartItem from "./CartItems";  
import React, {useState } from 'react';


function ProductDisplay({selectImage, index}){

  const [cartItems, setCartItems] = useState([]);
     
  const handleButtonClick = (selectImage) => {
         let updatedCart 
         updatedCart = [...cartItems];
        updatedCart.push(selectImage)
      
        
        const newItem = selectImage
        
        
       
        
       
        fetch('/carts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
              })
                .then(response => {
                  if (response.ok) {
                   console.log("updated")
                  } else {
                    console.log('Failed to add item to cart:', response.status);
                  }
                })
                .catch(error => {
                  console.log('Error adding item to cart:', error);
                });

                setCartItems(updatedCart);
        }



return(
        <div className="product-display" >
                {selectImage && (
                <div class="row g-0"> 
                <img  class="img-fluid rounded-start"  
                src={selectImage.image} 
                key={index}
                className="card-img-top" 
                alt={selectImage.name}
                title={selectImage.name} />
                
                <div className="info">
                        <h5 class="card-text" ><b>{selectImage.name}</b></h5><br/>
                    <figcaption>
                       <b>Price: $</b> <cite title="Source Title"><b>{selectImage.price}</b></cite>
                    </figcaption>
                    <p><b></b>{selectImage.description}</p>
                    <button  onClick={() => handleButtonClick(selectImage)} className="btn-length" class="btn btn-info">Add to Cart</button>

                </div>
               </div>
                )}
         {/* <CartItem item = {cartItems} setCartItems={ setCartItems}/> */}
         <div>
         {/* {cartItems.map((updated, index)=>
           
               <p>{updated.name}</p>
         )} */}
         {cartItems.name}
         </div>
        </div>
)
}
export default ProductDisplay;