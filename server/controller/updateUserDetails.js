const getUserDetailsToken = require("../helper/getUserDetailsFromToken")
const UserModel = require("../models/UserModel")

const updateUserDetails=async(req,res)=>{
    try {
        const token=req.cookies.token || ''
        const user=await getUserDetailsToken(token)

        const {name,profile_pic}=req.body
        const updateUser=await UserModel.updateOne({_id:user._id},{
            name,
            profile_pic,
        })

        return res.status(201).json({
            message:'updated user success',
            data:updateUser,
            success:true,
            error:false
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            error:true,
            succes:false
        })
    }
}
module.exports=updateUserDetails