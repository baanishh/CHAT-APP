const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        const connection=mongoose.connection

        connection.on('connected',()=>{
            console.log("connected");
        })

        connection.on('error',()=>{
            console.log("error on mongodb connection");
            
        })
    } catch (error) {
        console.log("monogo db connection error");
        
    }
}
module.exports=connectDB