import React from 'react'
import './OrderWrapper.css';

const orderWrapper = () => {
    return (
        <div>
            <h3 className="msg-order">Your order</h3>
            <input className="order-text" type="text"></input>
            <br></br>
            <button className="order-buttom" type="submit">Click to Whatsapp</button>          
        </div>
    )
}

export default orderWrapper