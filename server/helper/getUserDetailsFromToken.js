const jwt = require("jsonwebtoken")
const UserModel = require("../models/UserModel")

const getUserDetailsToken=async(token)=>{

    if(!token){
        return {
            message:'sesson out',
            logout:true
        }
    }

    const decode=await jwt.verify(token,process.env.JWT_SECRET_KEY)
    const user=await UserModel.findById(decode.id).select("-password")

    return user
}
module.exports=getUserDetailsToken