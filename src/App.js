import './index.css';
import { useState } from 'react';
import Header from './components/Header.js';
import Dispensary from './components/Dispensary.js';
import Cart from './components/Cart.js';
import Footer from './Footer.js';
import products from './data.js';

/* CREDIT TO BASHIR JAFARZADEH'S SHOPPING CART CODE ALONG */
  /* https://www.youtube.com/watch?v=AmIdY1Eb8tY */

function App() {

  const [ cartItems, setCartItems ] = useState([]);
  
  // onAdd Function --> adding items to cart
  const onAdd = (product) => {
    const exist = cartItems.find((cannabis) => cannabis.id === product.id);

    // IF the product exists in the cart, add one more. ELSE add ONE product to start.
    if (exist) {
      const newCartItems = cartItems.map((cannabis) => cannabis.id === product.id ? { ...exist, qty: exist.qty + 1} : cannabis);
      
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, {...product, qty: 1}];

      setCartItems(newCartItems);
    }
  }
  
  // onRemove Function --> removing items from cart
  const onRemove = (product) => {
    const exist = cartItems.find((cannabis) => cannabis.id === product.id);

    // IF there is one item, DON'T remove. ELSE remove item.
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((cannabis) => cannabis.id !== product.id);

      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((cannabis) => cannabis.id === product.id ? { ...exist, qty: exist.qty - 1 } : cannabis);

      setCartItems(newCartItems);
    }
  }

  return (
    <div>
      <header>
        <Header countCartItems={cartItems.length}
          onAdd={onAdd}
          products={products}
          cartItems={cartItems} />
      </header>

      <main>
        <div className="flex shopWrapper">
          <Dispensary 
            products={products}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove} />

          <Cart
            products={products}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove} />
        </div>
      </main>  

      <footer>
        <Footer />
      </footer>
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


  