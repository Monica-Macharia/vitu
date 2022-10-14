import "./ProductCard.css"
function ProductCard({ product }) {

    return (
        <div className='col'>
            <div className="card gx-1" style={{width: 23 + "rem", height: 27+ "rem"}}>
                <img style={{height: 220 + "px",width:220 + "px"}} src={product.image} className="card-img-top" alt={product.name} title={product.name}/>
                <div className="card-body">
                    <h5 className="card-title"><b>{product.name}</b></h5><br/>
                    <figcaption className="blockquote-footer">
                       <b>Price: $</b> <cite title="Source Title"><b>{product.price}</b></cite>
                    </figcaption>
                    <p className="card-text"><b>Description :</b>{product.description}</p>
                </div>
            </div>
        </div>
    )

    
}

export default ProductCard;