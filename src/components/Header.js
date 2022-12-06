
const Header = ({countCartItems, cartItems, products, onAdd, onRemove}) => {
    
    return (
        <div className="Header">
            <nav className="flex">
                <div className="">
                    
                        <h1 className="neonTitle">WELCOME TO MY DISPENSARY!</h1>
                   
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
                <h2 className="flex">Please enjoy my selection of cannabis products</h2>
            </div>
        </div>
    )
}



export default Header;