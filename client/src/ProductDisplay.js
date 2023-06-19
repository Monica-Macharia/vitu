function ProductDisplay({selectImage, index}){
        

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
                    <button className="btn-length" class="btn btn-info">Add to Cart</button>

                </div>
               </div>
                )}
            
        </div>
)
}
export default ProductDisplay;