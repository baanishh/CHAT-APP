const UserModel = require("../models/UserModel")
const bcryptjs=require('bcryptjs')

const registerUser=async(req,res)=>{
    try {
        const {name,email,password,profile_pic}=req.body

        const checkMail=await UserModel.findOne({email})

        if(checkMail){
            return res.status(400).json({
                message:"user Already exist",
                error:true,
            })
        }
         //hash password
         const salt=await bcryptjs.genSalt(10)
         const hashpassword=await bcryptjs.hash(password,salt)

         const payload={
            name,
            email,
            password:hashpassword,
            profile_pic
         }

         const user=new UserModel(payload)
         const userSave=await user.save()
         
         return res.status(201).json({
            data:userSave,
            message:"user created successfully",
            success:true,
            error:false
         })

    } catch (error) {
        return res.status(500).json({
            message:error.message||message,
            success:false,
            error:true
        })
    }
}

module.exports=registerUser