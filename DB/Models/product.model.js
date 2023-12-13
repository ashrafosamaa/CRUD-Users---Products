import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String
    },
    price:{
        type: Number
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product