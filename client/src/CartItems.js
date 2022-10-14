import { useState } from "react";
import "./CartItems.css"

function CartItem({ item }) {
    const [addQ, setAddQ] = useState(item.quantity)
    const [onConfirm, setOnconfirm] = useState(false)
    function handleAdd(){
        setAddQ(() => addQ + 1)
    }

    function handleReduce(){
        if (addQ > 1) {
            setAddQ(() => addQ - 1)
        }else if (addQ === 1) {
            setAddQ(1)
        }
    }
    const confirmColor = onConfirm? "button-confirm-green":"button-confirm-red"
    function handleDelete() {
        setOnconfirm(!onConfirm)
    }
    return (
        <div className="item-card">
            <img style={{height: 50 + "px",width:50 + "px"}} src={item.product.image} className="card-img-top" alt={item.product.name} title={item.product.name}/>
            <h1 className="item-title">{item.product.name}</h1>
            <h1 className="item-title">Price: ${item.product.price}</h1>
            <h1 className="quantity-count">{addQ}</h1>
            <button className="button-add" onClick={handleAdd}><strong>+</strong></button>
            <button className="button-reduce" onClick={handleReduce}>-</button>
            <button className={confirmColor} onClick={handleDelete} >{onConfirm? "confirmed!":"confirm"}</button>
            {/* <div>
                <div className="item-line"></div>
            </div> */}
        </div>
    )
}

export default CartItem;