// import the model;

const Todo = require('../models/todo');

// define route handler function;



exports.deleteTodo = async (req , res)=>{

    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({
            _id:id
        })
        res.status(200).json({
            success:true,
            data: todo,
            message: "todo entry deleted successfully"
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "unable to delete todo entry"
        })
     
   
    }
}  