import {useEffect, useState} from 'react'
import './Cart.css';
import CartItem from './CartItems';


export default function Cart() {
    const [purchases, setPurchases] =useState([])


    // useEffect(handleDummy)

    // function handleDummy() {
    //     setPurchases(dummy_data)
    // }
    // let dummy_data = [
    //     {
    //     "product_name":"spiky_mug",
    //     "quantity": 1,
    //     "product_id": 2,
    //     "user_id": 10
    // },
    // {
    //     "product_name":"spiky_shoe",
    //     "quantity": 2,
    //     "product_id": 4,
    //     "user_id": 9
    // },
    // {
    //     "product_name":"spiky_hoodie",
    //     "quantity": 2,
    //     "product_id": 1,
    //     "user_id": 8
    // }]
    
    useEffect(fetchPurchases, [])
    
    
    function fetchPurchases(){
        fetch('/purchases')
        .then(r => r.json())
        .then(data => setPurchases(data))
    }

    

    return (
        <div>
            <h1 className='cart-title'><strong>Cart</strong></h1>
            <div className='header-separator'></div>
            <div className='purchasesholder'>
                <div className='grey-topbar'><strong id='summary-header'>Item list</strong></div>
                <div className='items-loop'>
                {purchases.map(item => {
                    return (
                        <CartItem item = {item}/>
                    )
                })}
                </div>   
            </div>
            <div className='purchasessummary'>
            <div className='grey-topbar-summary'><strong id='summary-header'>Order Summary</strong></div>
                <strong id='summary-header'>Order Summary</strong>
                <button className='checkout-button'><strong>Checkout</strong></button>
            </div>
        </div>
    )
}