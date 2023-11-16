import Product from "../models/productmodel.js";

export const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json("Product is added")
    } catch (error) {
        res.status(409).json({message:error})
    }
};

export const showProducts = async (req,res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const updateProduct = async(req,res) => {
    try {
        await Product.findOneAndUpdate({_id:req.body._id},req.body)
        res.status(200).json("Item is updated successfully")
    } catch (error) {
        res.status(400).json({message: error})
    }
}


export const deleteProduct = async (req,res) => {
    try {
        await Product.findOneAndDelete({_id: req.body._id});
        // const products = Product.find()
        res.status(200).json("Product is deleted successfully")
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}