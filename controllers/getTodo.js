// import the model;

const Todo = require('../models/todo');



exports.getTodo = async (req , res)=>{

    try{
        //fetch all todo entries from the database
        const todos = await Todo.find({});

        //response 
        res.status(200).json({
            success:true,
            data: todos,
            message: "todo entries fetched successfully"
        })
      
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "unable to fetch todo entries"
        })
    

    }
} 

exports.getTodoById = async(req,res)=>{
    try{
        // extract the id from req.params
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});


        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message: "todo entry not found"
            })
        }
        // send the response
        res.status(200).json({
            success:true,
            data:todo,
            message: `todo entry with id ${id} fetched successfully`
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "unable to fetch todo entry"
        })

    }
}