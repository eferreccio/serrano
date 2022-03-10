import Product from './Product/Product'
import './ProdByCategory.css';

function ProductByCategory(props) {

    return (
        <div>
            <h4 className="category">{props.category}</h4>
            <Product/>       
        </div>
    )
}

export default ProductByCategory 