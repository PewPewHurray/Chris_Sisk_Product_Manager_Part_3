import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"

const Edit = (props) => {
    const {id} = useParams();
    const {title, setTitle, price, setPrice, description, setDescription} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                setTitle("");
                setPrice(0);
                setDescription("");
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div className="formInputs">
                    <label>Title: <input className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/></label>
                </div>
                <div className="formInputs">
                    <label>Price: <input className="priceInput" type="number" onChange={(e) => setPrice(e.target.value)} value={price}/></label>
                </div>
                <div className="formInputs">
                    <label>Description: <input className="descriptionInput" type="text" onChange={(e) => setDescription(e.target.value)} value={description}/></label>
                </div>
                <input type="submit" value="Confirm"/>
            </form>
        </div>
    )
}
export default Edit;