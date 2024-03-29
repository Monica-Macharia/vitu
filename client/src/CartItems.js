import { useState, useEffect } from "react";
import "./CartItems.css";

function CartItem() {
    const [ waitItems, setWaitItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
   
    useEffect(() => {
      fetch("/carts")
        .then((res) => res.json())
        .then((data) => {
          setWaitItems(data);
        });
    }, []);
  
    useEffect(() => {
      let total = 0;
      for (const cart of waitItems) {
        total += cart.price;
      }
      setTotalPrice(total);
    }, [waitItems]);
  
    function handleDelete(cartId) {
      fetch(`/carts/${cartId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setWaitItems(waitItems.filter((cart) => cart.id !== cartId));
    }
        

        return (
  <div className="payment">
   
        
                    
<table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Image</th>
      <th scope="col">Price ($)</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
     {waitItems.map((cart, index)=>
     <tr>
     <td scope="row">{cart.name}</td>
     <td><img className="size" src={cart.image} alt={cart.name}/></td>
      <td>{cart.price}</td>
      <button  onClick={() => handleDelete(cart.id)} class="btn btn-danger">Remove from Cart</button>
     

    
    </tr>
    )}
   
    
  </tbody>
</table>  

<div className="checkout" class="card" >
<div className="checks">
<div class="form-check ">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" ></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Home Delivery
  </label>
</div>
<div class="form-check ">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked ></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Pick-up
  </label>
</div>
</div>
<p className="checker">Total: ${totalPrice} </p>
<p className="checker">Sales Tax: $60 </p>
<p className="checker"><b> GrandTotal : ${totalPrice - 60} </b></p>
<button class="btn btn-info">Checkout</button>
</div>

{/* <div className="product-display" >
{waitItems.map((cart, index)=>
                <div class="row g-0"> 
                <img  class="img-fluid rounded-start"  
                src={cart.image} 
                key={index}
                className="card-img-top" 
                alt={cart.name}
                title={cart.name} />
                
                <div className="info">
                        <h5 class="card-text" ><b>{cart.name}</b></h5><br/>
                    <figcaption>
                       <b>Price: $</b> <cite title="Source Title"><b>{cart.price}</b></cite>
                    </figcaption>
                    
                    <input placeholder="Insert Quantity eg: 1" />
                    <p>Total:</p>

                </div>
               </div>
            
        
         
        //  
        
        
        </div> */}

                        
</div>
            
               ) }

 

export default CartItem;