import React, {useState} from "react";
import axios from "axios";

const ProductForm = (props) => {
    const {products, setProducts, title, setTitle, price, setPrice, description, setDescription} = props;
    const [titleError, setTitleError] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {title, price, description})
            .then((res) => {
                setProducts([...products, res.data]);
                setTitle("");
                setPrice(0);
                setDescription("");
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="formInputs">
                <label>Title: <input className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/></label>
                <p>{titleError}</p>
            </div>
            <div className="formInputs">
                <label>Price: <input className="priceInput" type="number" onChange={(e) => setPrice(e.target.value)} value={price}/></label>
            </div>
            <div className="formInputs">
                <label>Description: <input className="descriptionInput" type="text" onChange={(e) => setDescription(e.target.value)} value={description}/></label>
            </div>
            <input type="submit" value="Create"/>
        </form>
    )
}

export default ProductForm;