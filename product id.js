
const Gadget = require("./Product")

const productId = (req,res)=>{
    const id = Number(req.params.id);
    const product = Gadget.find(P=>P.id === id);
    if(!product)return res.status(404).json("product not found")
        res.status(200).json(product)
}

const postMan = (req,res)=>{
    const {name, price, category, quantity}=req.body;
    const newProduct = {
        id:Gadget.length+1,
        name,
        price,
        category,
        quantity
    };
    Gadget.push(newProduct);
    res.status(201).json("New product has been successfully created");
}

module.exports = {productId,postMan}