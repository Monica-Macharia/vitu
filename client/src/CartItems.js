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

    // let totals = 0;
    

    // for (let i = 0; i < item.length; i++){
    //     let price = item.product.price
    //     let sum = addQ * price[i]
    //     totals += sum
    // }
    const confirmColor = onConfirm? "button-confirm-green":"button-confirm-red"
    function handleDelete() {
        setOnconfirm(!onConfirm)
    }
    return (
        <table class="table" >
                <thead>
                    <tr>
                    <th class="width" scope="col">Product</th>
                    <th class="width" scope="col">Price</th>
                    <th class="width" scope="col">Quantity</th>
                    <th class="width" scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                    <div className="padding" class="card" >
                        <img src={item.product.image} className="cardrow" alt="product"/>
                       
                            <p class="card-text">{item.product.name}</p>
                        </div>
                       
                    </th>
                    <td>{item.product.price}</td>
                    <td>

                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input  onClick={handleAdd} type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                        <label class="btn btn-outline-primary" for="btnradio1">+</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="btnradio2">{addQ}</label>

                        <input onClick={handleReduce} type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="btnradio3">-</label>
                    </div>


                    {/* <button  onClick={handleAdd}><strong>+</strong></button>
                    <div ><h1 >{addQ}</h1>
                    <button  onClick={handleReduce}>-</button>
                    
                    </div> */}
                    </td>
                    <td>{}</td>
                    </tr>
                    </tbody>
                    <h2>Subtotals:{}</h2>


      </table>
        // <div className="item-card" class="card mb-3" >
        //     <img style={{height: 50 + "px",width:50 + "px"}} src={item.product.image} className="card-img-top" alt={item.product.name} title={item.product.name}/>
        //     <h1 className="item-title">{item.product.name}</h1>
        //     <h1 className="item-title">Price: ${item.product.price}</h1>
        //     <div class="col-md-8"><h1  className="quantity-count">{addQ}</h1>
        //     <button  className="button-add" onClick={handleAdd}><strong>+</strong></button>
        //     <button className="button-reduce" onClick={handleReduce}>-</button>
        //     <button  className={confirmColor} onClick={handleDelete} >{onConfirm? "confirmed!":"confirm"}</button>
        //     <p>Total:{addQ * item.product.price}</p>
        //     </div>
        //     {/* <div>
        //         <div className="item-line"></div>
        //     </div> */}
        // </div>
    )
}

export default CartItem;