import React, {useState, useEffect} from 'react';
// import ProductCard from './ProductCard';
import ProductDisplay from './ProductDisplay';
import "./Products.css"



const Products = () => {

    const [products, setProducts] = useState([]);

    const [selectImage, setSelectImage] = useState(null);

        const handleImageClick = (image) => {
            setSelectImage(image);
        }

    useEffect(() => {
        fetch("/products")
        .then(res => res.json())
        .then(data => {
           setProducts(data);
           if (data.length > 0) {
            setSelectImage(data[0]);
          }
        } )
    }, [])


    return (
      <div className="products-page look"> 
        
       
      
      <ProductDisplay selectImage={selectImage}/>
      
      <div></div>
      <div class="g-col-12" className="container">
          {products.map((image, index)=>(
              <div className="product-item">
               <img  class="center" 
                src={image.image} 
                key={index}
                className="card-img-top" 
                alt={image.name} 
                onClick={() => handleImageClick(image)}
                
                />
            <p>by Vizuri Store</p>  
            </div>      
          ))}
                   
                 
                </div>
        
        
        </div>
        );
        
};
export default Products;