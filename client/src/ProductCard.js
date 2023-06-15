import "./ProductCard.css"
function ProductCard({ product, products }) {

    const addToCart = ({products}) => {
        fetch('/purchases', {
        method: 'POST',
        body: JSON.stringify({ products}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
            
         
        })
        .catch(error => {
          // Handle any errors that occurred during the API request
          console.error('Error adding item to cart:', error);
        });
    };

    return (
        
         
               <div class="g-col-12">
                     <img class="center" style={{height: 220 + "px",width:220 + "px"}} src={product.image} className="card-img-top" alt={product.name} title={product.name}/>
                    <p>by Vizuri store</p>
                    <h5 className="card-title"><b>{product.name}</b></h5><br/>
                    <figcaption>
                       <b>Price: $</b> <cite title="Source Title"><b>{product.price}</b></cite>
                    </figcaption>
                    <p><b></b>{product.description}</p>
                    <button className="btn-length" class="btn btn-info" onClick={addToCart}>Add to Cart</button>
                </div>
         
    )

    
}

export default ProductCard;