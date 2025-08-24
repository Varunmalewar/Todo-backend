// import the model;

const Todo = require('../models/todo');

// define route handler function;



exports.updateTodo = async (req , res)=>{

    try{
      const {id} = req.params;
      const {title,description}= req.body;
      const todo = await Todo.findByIdAndUpdate({
        _id:id
      },{
        title,description,
        updatedAt: Date.now()
      })
      res.status(200).json({
        success:true,
        data: todo,
        message: "todo entry updated successfully"
      })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "unable to update todo entry"
        })
   
    }
}  