const express = require('express');

// createing router object
const router = express.Router();

//import controller 
const {createTodo} = require('../controllers/createTodo');
const {getTodo,getTodoById} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');


// define the route and attach the controller function to it
router.post('/createtodo', createTodo);
router.get('/gettodo', getTodo);
router.get('/gettodo/:id', getTodoById);
router.put('/updatetodo/:id', updateTodo);
router.delete('/deletetodo/:id', deleteTodo);

module.exports = router;