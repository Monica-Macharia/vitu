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
      
        <div className='container'>
        <div className='row'>
            {products.map(product =>(
                <ProductCard product = {product} products={product.id}/>
            ))}
        </div>
        </div>
       
        );
};
export default Products;