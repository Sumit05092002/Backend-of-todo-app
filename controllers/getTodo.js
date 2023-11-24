const todo=require("../models/todo")
exports.getTodo=async(req,res)=>{
    try {
        const todos=await todo.find({})
        res.status(200).json({
            success:true,
            data:todos,
            message:"Data fetched successfully"
        })
        
    } catch (error) {
        console.log(error);
       res.status(500).json({
        success:true,
        data:"Internal server error",
        message:error.message
       })
    }
}

exports.getTodoById=async(req,res)=>{
    try {
        const id=req.params.id;
        const response=await todo.find({_id: id})
        res.status(200).json({
            success:true,
            data:response,
            message:"Data fetched successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message
        })
    }
}