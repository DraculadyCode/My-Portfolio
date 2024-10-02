import products from './products.js'
import Product from './Product.jsx'

function ProductsList({}){
    return (
        <div className="ProductList">
            {products.map(p => <Product key={p.id} product={p} />)}
        </div>
    )
}

export default ProductsList