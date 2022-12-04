
const Header = () => {

    return (
        <div className="Header flex">
            <div>
                <a href="#/">
                    <h1>WELCOME TO MY DISPENSARY!</h1>
                </a>
                <h2>What would you like to buy today?</h2>
                <h3>Click the desired products to add them to your cart</h3>
            </div>
            <div className="sideLinks">
                <a href="#/">Cart |
                </a> <a href="#/">Sign In</a>
            </div>
        </div>

    )
}



export default Header;