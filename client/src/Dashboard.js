import React from 'react';
// import { useNavigate } from 'react-router-dom'

import './Cart.css';
import CartItem from './CartItems';

function Dashboard(){


    // const [purchases, setPurchases] =useState([])
    // useEffect(fetchPurchases, [])
    
    
    // function fetchPurchases(){
    //     fetch('/purchases')
    //     .then(r => r.json())
    //     .then(data => setPurchases(data))
    // }
    // const navigate = useNavigate();
    // const handlelogout = () => {
    // navigate('/login')
    // }
    

    return (
        <div>
            
         
            <h1 className='cart-title'><strong>Cart</strong></h1>
            <div className='header-separator'></div>
            <div className='purchasesholder'>
                <div className='grey-topbar'><strong id='summary-header'>Item list</strong></div>
                <div className='items-loop'>
                
                        <CartItem />
                 
                </div>   
            </div>
            {/* <div className='purchasessummary'>
            <div className='grey-topbar-summary'><strong id='summary-header'>Order Summary</strong></div>
                ddddddddddd
                <div>SubTotals:</div>
                <button className='checkout-button'><strong>Checkout</strong></button>
            </div> */}
            {/* <input
        type="button"
        value="Logout"
        onClick={handlelogout}/> */}
        </div>
    )
}

export default Dashboard;