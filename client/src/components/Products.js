import React, {useState, useEffect} from 'react';



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
        <div className='product-container'>
            {products.map(product =>(
                <div key={product.id} className='product-item'>
                    image: {product.image}
                    name: {product.name}
                    category: {product.category}
                    description: {product.description}
                    price: {product.price}
                    review: {product.review}
                </div>
            ))}
        </div>
        </div>
        );
};
export default Products;