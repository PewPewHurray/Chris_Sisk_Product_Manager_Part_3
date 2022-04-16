import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className="productTitle">{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/"} >Home</Link>
            <button onClick={(e) => deleteProduct(id)}>Delete</button>
        </div>
    )
}
export default Detail;