import { useState } from "react";
import "./CartItems.css"

function CartItem({ item }) {
    const [addQ, setAddQ] = useState(item.quantity)
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

    function handleDelete() {
    }
    return (
        <div className="item-card">
            <h1>{item.product_name}</h1>
            <h1 className="quantity-count">{addQ}</h1>
            <button className="button-add" onClick={handleAdd}><strong>+</strong></button>
            <button className="button-reduce" onClick={handleReduce}>-</button>
            <button className="button-delete" onClick={handleDelete} >x</button>
            {/* <div>
                <div className="item-line"></div>
            </div> */}
        </div>
    )
}

export default CartItem;