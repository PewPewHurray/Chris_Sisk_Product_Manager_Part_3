import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Main from './Views/Main';
import Detail from "./components/Detail";
import Edit from './components/Edit';

function App() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main products={products} setProducts={setProducts} title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription} />} path="/" />
          <Route element={<Detail />} path="/:id" />
          <Route element={<Edit products={products} setProducts={setProducts} title={title} setTitle={setTitle} price={price} setPrice={setPrice} description={description} setDescription={setDescription} />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
