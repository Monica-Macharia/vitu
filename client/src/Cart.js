import {useEffect, useState} from 'react'
import './Cart.css';


export default function Cart() {
    const [purchases, setPurchases] =useState([])
    const [quantityCount, setQuantityCount] = useState(1)

    let dummy_data = [
        {
        "product_name":"spiky_mug",
        "quantity": 3,
        "product_id": 2,
        "user_id": 10
    },
    {
        "product_name":"spiky_shoe",
        "quantity": 2,
        "product_id": 4,
        "user_id": 9
    },
    {
        "product_name":"spiky_hoodie",
        "quantity": 2,
        "product_id": 1,
        "user_id": 8
    }]
    
    useEffect(fetchPurchases, [])
    
    
    function fetchPurchases(){
        fetch('http://localhost:3000/purchases')
        .then(r => r.json())
        .then(data => setPurchases(data))
    }

    

    return (
        <div>
            <h1>Vitu vizuri-Header</h1>
            <h1 className='cart-title'><strong>Cart</strong></h1>
            <div className='header-separator'></div>
            <div className='purchasesholder'>
                <div className='grey-topbar'><strong id='summary-header'>Item list</strong></div>
                {dummy_data.map(dummy => {
                    function handleAdd() {
                      dummy.quantity = 4
                    }
                    return (
                        <div>
                        <h1>{dummy.product_name}</h1>
                        <h1>{dummy.quantity}</h1>
                        <button onClick={handleAdd()}>+</button>
                        <button>-</button>
                        <button>x</button>
                        </div>
                    )
                })}
                
            </div>
            <div className='purchasessummary'>
            <div className='grey-topbar-summary'><strong id='summary-header'>Order Summary</strong></div>
                <strong id='summary-header'>Order Summary</strong>
                <button className='checkout-button'><strong>Checkout</strong></button>
            </div>
        </div>
    )
}