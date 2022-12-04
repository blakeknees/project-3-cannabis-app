import './index.css';
import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Dispensary from './components/Dispensary.js';
import Cart from './components/Cart.js';
import products from './data.js';


function App() {

  const [ cartItems, setCartItems ] = useState([]);

  const onAdd = (product) => {

  }

  const onRemove = (product) => {

  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Dispensary 
          products={products}
          onAdd={onAdd}
          onRemove={onRemove} />
        <Cart />
      </div>
    </div>
  );
}

export default App;

// PSUEDO CODE:

// STEP 1:
  // on page mount, display full dispensary page, which includes:
    // 4 categories, 3 product selections each 
      // each product option is a button
    // an empty "cart" at the bottom that will receive user input

// STEP 2:
  // when a product button is clicked it's removed from it’s original spot and appended to the ‘cart’.
  // if user wishes to remove a product from their cart, clicking product button again will return it to its original category
