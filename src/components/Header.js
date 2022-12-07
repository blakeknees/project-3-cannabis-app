
const Header = ({countCartItems, cartItems, products, onAdd, onRemove}) => {
    
    return (
        <section className="Header">
            <nav className="flex">

                <h1 className="neonTitle">WELCOME TO MY DISPENSARY!</h1>
                   
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
            
        </section>
    )
}



export default Header;