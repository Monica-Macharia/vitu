import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import "./Products.css"



const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
      <div className="products-page"> 
      <h2>Complete the look</h2>
      <p>Outfit inspiration</p>
      
      <div className='container'>
            {products.map(product =>(
               
               
             
                <ProductCard product = {product} products={product.id}/>
                
                
            ))}
           </div>
        
        
        </div>
        );
};
export default Products;