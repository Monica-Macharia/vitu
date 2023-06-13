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
        <div className="items">
            <div className='col' class="grid text-center" >
                <img className="card-body" class="g-col-12" style={{height: 220 + "px",width:220 + "px"}} src={product.image} className="card-img-top" alt={product.name} title={product.name}/>
                <div class="g-col-12">
                    <h5 className="card-title"><b>{product.name}</b></h5><br/>
                    <figcaption className="blockquote-footer">
                       <b>Price: $</b> <cite title="Source Title"><b>{product.price}</b></cite>
                    </figcaption>
                    <p className="card-text"><b>Description :</b>{product.description}</p>
                    <button class="btn btn-info" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )

    
}

export default ProductCard;