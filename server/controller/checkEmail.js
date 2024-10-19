const UserModel = require("../models/UserModel")

const checkEmail=async(req,res)=>{
    try {
        const {email}=req.body

        const checkEmail= await UserModel.findOne({email}).select("-password")
        if(!checkEmail){
            return res.status(400).json({
                message:"email not registered",
                error:true,
            })
        }
        return res.status(201).json({
            message:"email verified",
            success:true,
            error:false,
            data:checkEmail
        })
    } catch (error) {
        return res.status(500).json({
            message:"not valid email",
            success:false,
            error:true
        })
    }
}
module.exports=checkEmail