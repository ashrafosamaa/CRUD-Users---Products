import Product from "../../../DB/Models/product.model.js";
import User from "../../../DB/Models/user.model.js";

export const addProduct = async (req, res, next) =>{
    try{
        const {name, desc, price, userID} = req.body
        const user = await User.findById(userID)
        if(!user){
            return res.json({msg: "not correct user id"})
        }
        const product = await Product.create({name, desc, price, userID})
        res.json({msg: "product added successfully"})
    }
    catch (error) {
        res.json({msg: "failed to add", error})
    }
}

export const deleteProduct = async (req, res, next)=>{
    const {_id, userID}= req.query
    const product = await Product.findOneAndDelete({
        $and:[
            {_id},{userID}
        ]
    })
    if(!product){
        return res.json({msg: "product delete fail"})
    }
    return res.json({msg: "product delete success"})
}

export const updateProduct = async (req, res, next)=>{
    const {_id, userID} = req.query
    const {name, desc, price} = req.body
    const product = await Product.findOne({
        $and:[
            {_id},{userID}
        ]
    })
    if(!product){
        return res.json({msg: "userid or product id is not correct"})
    }
    await product.updateOne({name, desc, price})
    return res.json({msg: "product updated success"})
}

export const listProducts = async (req, res, next)=>{
    const product = await Product.find()
    if(!product.length){
        return res.json({msg: "no data found"})
    }
    res.json(product)
}

export const getProductAndUsers = async (req, res, next)=>{
    const product = await Product.find()
    .populate([{path: 'userID', select: 'userName email phone -_id'}])
    .select('title desc price createdAt -_id')
    if(!product.length){
        return res.json({msg: "no data found"})
    }
    return res.json(product)
}

export const descProducts = async (req, res, next)=>{
    const product = await Product.find().sort({createdAt: 1})
    if(!product.length){
        return res.json({msg: "no data found"})
    }
    return res.json(product)
}