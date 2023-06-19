function ProductDisplay({selectImage, index}){
        

return(
        <div className="product-display" >
                {selectImage && (
                <div class="row g-0"> 
                <img  class="img-fluid rounded-start"  style={{height: 220 + "px",width:220 + "px"}}
                src={selectImage.image} 
                key={index}
                className="card-img-top" 
                alt={selectImage.name}
                title={selectImage.name} />
                <h5 className="card-title" ><b>{selectImage.name}</b></h5><br/>
                    <figcaption>
                       <b>Price: $</b> <cite title="Source Title"><b>{selectImage.price}</b></cite>
                    </figcaption>
                    <p><b></b>{selectImage.description}</p>
                    <button className="btn-length" class="btn btn-info">Add to Cart</button>
               </div>
                )}
            
        </div>
)
}
export default ProductDisplay;