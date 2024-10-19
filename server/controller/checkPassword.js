const jwt= require("jsonwebtoken")
const UserModel = require("../models/UserModel")
const bcryptjs=require('bcryptjs')


const checkPassword=async(req,res)=>{
    try {
        const {password,userId}=req.body

        const user=await UserModel.findById(userId)
        const verifyPassword=await bcryptjs.compare(password,user.password) 
        if(!verifyPassword){
            return res.status(400).json({
                message:"please check password",
                error:true
            })
        }

        const tokenData={
            id:user._id,
            email:user.email
        }
        const token=await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'1d'})

        const cookieOptions={
            http:true,
            secure:true,
            sameSite:'None'
        }
        return res.cookie('token',token,cookieOptions).status(200).json({
            message:'login successfull',
            success:true,
            error:false,
            token:token
        })

    } catch (error) {
        return res.status(500).json({
            message:'login failed',
            error:true,
            success:false
        })
    }
}
module.exports=checkPassword