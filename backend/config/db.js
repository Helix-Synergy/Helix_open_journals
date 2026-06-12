const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
async function ConnectionDB(){
const conn=await mongoose.connect(process.env.MONGODB_URL)
if(conn){
    console.log("Database Connected Successfully");
}
else{
    console.log("Check the connection");
     process.exit(1);
}
}
module.exports=ConnectionDB;