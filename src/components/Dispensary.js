import { useState } from "react";
import React from "react";

const Dispensary = ({products, onAdd, cartItems, onRemove}) => {
    

    return (
        <section className="Dispensary col2">
                <div className="ShopArea">
                    <div className="CategoryBox">
                            <h3>Flower</h3>
                        <div className="ProductBox">
                            {products["flower"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);

                                    // what if i made it more specific like product.name?
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    <div className="cardFlex">
                                        <p>{product.brand}</p>
                                        <p>{product.thc}</p>
                                    </div>
                                    <div className="cardFlex">
                                        <p>{product.weight}</p>
                                        <p>${product.price}</p>
                                    </div>
                                    <div>
                                        <button 
                                        onClick={dispensaryOnAdd}>Add to Cart</button>
                                    </div>
                                    </li>
                                </ul>
                                )
                            })}
                        </div>
                    </div>

                    <div className="CategoryBox">
                        <h3>Concentrates</h3>
                        <div className="ProductBox">
                            {products["concentrates"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    <div className="cardFlex">
                                        <p>{product.brand}</p>
                                        <p>{product.thc}</p>
                                    </div>
                                    <div className="cardFlex">
                                        <p>{product.weight}</p>
                                        <p>${product.price}</p>
                                    </div>
                                    <div>
                                        <button 
                                        onClick={dispensaryOnAdd}>Add to Cart</button>
                                    </div>
                                    </li>
                                </ul>
                                )
                            })}
                        </div>
                    </div>

                    <div className="CategoryBox">
                        <h3>Edibles</h3>
                        <div className="ProductBox">
                        {products["edibles"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    <div className="cardFlex">
                                        <p>{product.brand}</p>
                                        <p>{product.thc}</p>
                                    </div>
                                    <div className="cardFlex">
                                        <p>{product.weight}</p>
                                        <p>${product.price}</p>
                                    </div>
                                    <div>
                                        <button 
                                        onClick={dispensaryOnAdd}>Add to Cart</button>
                                    </div>
                                    </li>
                                </ul>
                                )
                            })}
                        </div>
                    </div>

                    <div className="CategoryBox">
                        <h3>Accessories</h3>
                        <div className="ProductBox">
                        {products["accessories"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    <div className="cardFlex">
                                        <p>{product.brand}</p>
                                        <p>${product.price}</p>
                                    </div>
                                    <div className="cardFlex">
                                        <p>{product.size}</p>
                                    </div>
                                    <div>
                                        <button 
                                        onClick={dispensaryOnAdd}>Add to Cart</button>
                                    </div>
                                    </li>
                                </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Dispensary;