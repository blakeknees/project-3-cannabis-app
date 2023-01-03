import React from "react";

const Cart = ({ cartItems, onAdd, onRemove, products }) => {
    
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 100 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice; 


    return (
        <section className="Cart col1">

                <ul className="cartContainer">
                    <h2>YOUR CART</h2>
                {cartItems.length === 0 && <li className="emptyCart">Cart is Empty</li>}

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
                                <li key={item.id} className="flex fullCart">
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
                                </li>
                            )
                    }))}
                {cartItems.length !== 0 && (
                    <>
                    <hr />
                    <li className="flex fullCart">
                        <div className="col2">Items Price</div>
                        <div className="col1">${itemsPrice.toFixed(2)}</div>
                    </li>
                    <li className="flex fullCart">
                        <div className="col2">Tax Price</div>
                        <div className="col1">${taxPrice.toFixed(2)}</div>
                    </li>
                    <li className="flex fullCart">
                        <div className="col2">Shipping Price</div>
                        <div className="col1">${shippingPrice.toFixed(2)}</div>
                    </li>
                    <li className="flex fullCart">
                        <div className="col2">Total Price</div>
                        <div className="col1">${totalPrice.toFixed(2)}</div>
                    </li>
                    <hr />
                    <div className="flex">
                        <button onClick={() => alert('Implement Checkout!')}>
                            Checkout
                        </button>
                    </div>
                    </>
                )}
                </ul>
            </section>
    )
}

export default Cart;