import React, {useState} from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const {products, setProducts, title, setTitle, price, setPrice, description, setDescription} = props;



    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}
export default Main;