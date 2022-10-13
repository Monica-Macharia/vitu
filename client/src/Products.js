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
        <div>
        <h3>Our Products</h3>
        <div>
        <div className='container'>
        <div className='row'>
            {products.map(product =>(
                <ProductCard product = {product}/>
            ))}
        </div>
        </div>
        </div>
        </div>
        );
};
export default Products;