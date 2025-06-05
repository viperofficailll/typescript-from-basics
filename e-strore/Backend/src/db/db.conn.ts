import mongoose from "mongoose";

export const conn = async()=>{
    const uri = process.env.MONGO_URI
    if(!uri){
        console.log("no uri")
        return
    }
   
    try {
        await mongoose.connect(uri, { dbName: "estore" });
        console.log("connected to mongodb")
        
      
    } catch (error) {
        console.log("failed to connect to db")
        
    }



}