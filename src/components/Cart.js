import { useState } from "react";
import React from "react";

const Cart = ({ cartItems, onAdd, onRemove, products }) => {
    
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 100 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice; 


    return (
        <div className="Cart col1">
            <div className="">
                <h2>CART ITEMS</h2>
                <div className="cartContainer">
                {cartItems.length === 0 && <div className="emptyCart">Cart is Empty</div>}

                {cartItems.length === 0
                    ? null
                    : (cartItems.map((item) => {
                            const dispensaryOnRemove = () => {
                                onRemove(item);
                            }

                            const dispensaryOnAdd = () => {
                                onAdd(item);
                            }

                            return (
                                <div key={item.id} className="flex">
                                    <div className="col1">{item.name}</div>
                                    <div className="col1">
                                        <button onClick={dispensaryOnRemove} className="remove">
                                            -
                                        </button>
                                        <button onClick={dispensaryOnAdd} className="add">
                                            +
                                        </button>
                                    </div>
                                    <div className="col1">
                                        {item.qty} x ${item.price.toFixed(2)}
                                    </div>
                                </div>
                            )
                    }))}
                {cartItems.length !== 0 && (
                    <>
                    <hr />
                    <div>
                        <div className="col2">Items Price</div>
                        <div className="col1">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className="col2">Tax Price</div>
                        <div className="col1">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className="col2">Shipping Price</div>
                        <div className="col1">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className="col2">Total Price</div>
                        <div className="col1">${totalPrice.toFixed(2)}</div>
                    </div>
                    <hr />
                    <div>
                        <button onClick={() => alert('Implement Checkout!')}>
                            Checkout
                        </button>
                    </div>
                    </>
                )}
                </div>
    
            </div>
        </div>
    )
}

export default Cart;