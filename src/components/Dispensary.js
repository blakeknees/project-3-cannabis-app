import { useState } from "react";
import React from "react";

const Dispensary = ({products, onAdd, cartItems, onRemove}) => {
    

    return (
        <div className="Dispensary col2">
            
                <h2>PRODUCTS!</h2>
                
                <div className="ShopArea">
                    <div className="CategoryBox">
                            <h4>Flower</h4>
                        <div className="ProductBox">
                            {products["flower"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <div>${product.price}</div>
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
                        <h4>Concentrates</h4>
                        <div className="ProductBox">
                            {products["concentrates"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <div>${product.price}</div>
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
                        <h4>Edibles</h4>
                        <div className="ProductBox">
                        {products["edibles"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <div>${product.price}</div>
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
                        <h4>Accessories</h4>
                        <div className="ProductBox">
                        {products["accessories"].map((product) => {

                                const dispensaryOnAdd = () => {
                                    onAdd(product);
                                }

                                return (
                                <ul>
                                    <li key={product.id} className="card">
                                    <img className="smallPic" src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <div>${product.price}</div>
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
        </div>
    )
}

export default Dispensary;