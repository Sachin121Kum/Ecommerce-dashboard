const express = require('express');
const mongoose = require('mongoose');
const app = express();


const connectDB = async ()=>{
     mongoose.connect('mongodb://localhost:27017/e-comm');

    const productSchema = new mongoose.Schema({});
    const productModel = mongoose.model('products',productSchema);
    const data = await productModel.find();
    console.warn(data);
}

connectDB();

app.listen(5000,()=>{
    console.log("Server Started");
})