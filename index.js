// step 1, require express
const express = require("express")
const Gadget = require("./Product")
const {productId,postMan} = require("./product id")
// step 2, instantiate express
const app = express()
app.use(express.json())
app.get("/products", (req, res) => { res.json(Gadget) })
app.post("/products",postMan)

// params(getone product)
app.get("/products/:id",productId)
// step 3, connect express
app.listen(2026, () => {
    console.log("Server is running on port 2026")
})