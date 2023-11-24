const todo=require("../models/todo")

exports.deleteTodo=async(req,res)=>{
    try {
        const id=req.params.id;
        await todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            message:"Deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}