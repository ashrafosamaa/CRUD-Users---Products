import User from "../../../DB/Models/user.model.js"

export const signUp = async (req, res, next)=>{
    const {userName, email, password, age, gender, phone} = req.body
    const emailChecker = await User.findOne({email})
    if(emailChecker){
        return res.json({msg: "this email is used before"})
    }
    const user = await User.create({userName, email, password, age, gender, phone})
    return res.json({msg: "user added successfully"})
}

export const signIn = async (req, res, next)=>{
    const {email, password} = req.body
    const user = await User.findOne({email: email, password: password})
    if(!user){
        return res.json({msg: "email or password inserted wrong"})
    }
    return res.json({msg: "sign in successfully done"})
}

export const updateUser = async (req, res, next)=>{
    const {userName, email, password, age, gender, phone} = req.body
    const user =  await User.findById(req.query._id)
    const emailChecker = await User.findOne({email, _id: {$ne: req.query._id}}) 
    if(!user){
        return res.json({msg: "user not updated"})
    }
    if(emailChecker){
        return res.json({msg: "this email is used before"})
    }
    await user.updateOne({userName, email, password, age, gender, phone})
    return res.json({msg: "user updated sucessfully"})
}

export const deleteUser = async (req, res, next)=>{
    const {email, password} = req.body
    const user = await User.findOneAndDelete({email, password})
    if(!user){
        return res.json({msg: "user delete faild"})
    }
    return res.json({msg: "user delete success"})
}

export const findUserOne = async (req, res, next)=>{
    const {X, Y} = req.body
    const user = await User.find({userName: {$regex: X, $options: 'i'}, age :{$lt: Y}})
    if(!user.length){
        return res.json({msg: "no data found"})
    }
    return res.json(user)
}

export const findUserTwo = async (req, res, next)=>{
    const {X, Y} = req.body
    const user = await User.find({age: {$gte: X, $lt: Y}})
    if(!user.length){
        return res.json({msg: "no data fond"})
    }
    return res.json(user)
}

export const listUsers = async (req, res, next)=>{
    const users = await User.find()
    if(!users.length){
        return res.json({msg: "no data fond"})
    }
    return res.json(users)
}

export const getUsersAndProducts = async (req, res, next)=>{
    const usersWithProducts = await User.aggregate([
        {
            $lookup: {
            from: 'products', 
            localField: '_id',
            foreignField: 'userID',
            as: 'products'
            }
    }
    ])
    if(!usersWithProducts){
        return res.json({msg: "no data"})
    }
    return res.json(usersWithProducts)
}