const getUserDetailsToken = require("../helper/getUserDetailsFromToken")

const userDetails=async(req,res)=>{
    try {
        const token=req.cookies.token || ""

        const user=await getUserDetailsToken(token)

        return res.status(201).json({
            message:'user details',
            data:user,
            succes:true
              })
    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}
module.exports=userDetails