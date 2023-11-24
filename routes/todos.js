const express=require('express');
const router=express.Router();

const {createTodo}=require("../controllers/createTodo")
router.post("/createTodo",createTodo)
const {getTodo,getTodoById}=require("../controllers/getTodo")
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodoById)
const{updateTodo}=require("../controllers/updateTodo")
router.put("/updateTodo/:id",updateTodo)
const {deleteTodo}=require("../controllers/deleteTodo")
router.delete("/deleteTodo/:id",deleteTodo)
module.exports=router;