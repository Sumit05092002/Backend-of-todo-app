const mongoose=require('mongoose');

require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Connection to database successful")})
    .catch((error)=>{
        console.log("could not connect to database");
        console.error(error);
    })
}

module.exports=dbConnect;