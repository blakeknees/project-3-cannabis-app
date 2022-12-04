
const Dispensary = ({products}) => {

    const onAdd = (product) => {
        console.log("on add!")
    }

    const onRemove = (product) => {

     }

    return (
        <div className="Dispensary col2">
            
            <h2>PRODUCTS!</h2>
            
            <div className="ShopArea">
                <div className="CategoryBox">
                    <h4>Flower</h4>
                    <div className="ProductBox">
                        {products["flower"].map((product) => {
                            return (
                            <ul>
                                <li key={product.id} className="card">
                                <img className="smallPic" src={product.image} alt={product.name} />
                                <p>{product.name}</p>
                                <div>${product.price}</div>
                                <div>
                                    <button onClick={() => onAdd(product)}>Add to Cart</button>
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
                            return (
                            <ul key={product.id}>
                                <div>{product.name}</div>
                            </ul>
                            )
                        })}
                    </div>
                </div>

                <div className="CategoryBox">
                    <h4>Edibles</h4>
                    <div className="ProductBox">
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    </div>
                </div>

                <div className="CategoryBox">
                    <h4>Accessories</h4>
                    <div className="ProductBox">
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    </div>
                </div>

                </div>



        </div>
    )
}

export default Dispensary;