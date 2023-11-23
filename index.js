const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("Hi this is a server running at port no 3000")
})

app.get("/",(req,res)=>{
    res.send("Hi I am the server you were looking for");
})

const dbConnect=require("./config/database")
dbConnect();

app.use(express.json());
const route=require("./routes/todos")
app.use("/api/v1",route);