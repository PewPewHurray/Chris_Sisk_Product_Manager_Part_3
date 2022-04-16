import React, {useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    const {products, setProducts} = props;

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id != productId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => console.log(err));
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className="allProducts">List of All Products</p>
            {
                products.map((product, index) => {
                    return (
                        <div className="productListItem" key={index}>
                            <Link to={`/${product._id}`}>{product.title}</Link>
                            |
                            <Link to={`/edit/${product._id}`}>Edit</Link>
                            |
                            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;