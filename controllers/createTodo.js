// import the model;

const Todo = require('../models/todo');

// define route handler function;


// why made async function? because api call is asynchronous in nature
// so we need to wait for the api call to complete before sending the response back to the client
// database interaction ke waqt async ho kyu ki main thread siturb na ho 
exports.createTodo = async (req , res)=>{

    try{
        // extract the data from req ki body

        const {title , description}= req.body;


        // create a new toddo object aur usko insert kar diya db ke andar 
        const response = await Todo.create({title, description});

        //send a json response with success flag
        res.status(200).json({
            success:true,
            data: response,
            message: "todo entry created successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "unable to create todo entry"
        })

    }
}  