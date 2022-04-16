const Product = require("../models/product.model");

const findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => { res.json(allProducts)})
        .catch(err => res.json(err));
}

const createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

const findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => { res.json(product)})
        .catch(err => res.json(err));
}

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

const deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports = {
    findAllProducts,
    createProduct,
    findOneProduct,
    updateProduct,
    deleteProduct
}