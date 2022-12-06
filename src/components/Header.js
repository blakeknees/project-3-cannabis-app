
const Header = ({countCartItems, cartItems, products, onAdd, onRemove}) => {
    
    return (
        <div className="Header">
            <nav className="flex">
                <div>
                    <a href="#/">
                        <h1>WELCOME TO MY DISPENSARY!</h1>
                    </a>
                </div>

                <div className="sideLinks">
                    <a href="#/cart">
                    Cart{' '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )}
                    </a>{' '}
                    <a href="#/signin">Sign In</a>
                    </div>
            </nav>
            <div className="wrapper">
                <h2 className="flex">What would you like to buy today?</h2>
            </div>
        </div>
    )
}



export default Header;