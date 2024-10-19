const logout =async(req,res)=>{
    try {

        const cookieOptions={
            http:true,
            secure:true,
            sameSite:'None'
        }

        return res.cookie('token','',cookieOptions).json({
            message:"logout success",
            success:true
        })

    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}
module.exports=logout