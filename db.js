const mongoose=require("mongoose")

const mongoURI = "mongodb+srv://gagan:Gagan@helphaven2@helphaven2.m1dogqc.mongodb.net/"

const connectToMongo=()=>
{
    mongoose.connect(mongoURI,()=>{console.log("connection secure")}
    )
}

module.exports=connectToMongo;