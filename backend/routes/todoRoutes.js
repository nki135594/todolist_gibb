const express = require('express');
const { createDB, createTable, createList, showTodos, singleTodo, updateTodo, deleteTodoByid } = require('../controllers/todoController');
const router = express.Router();

//ROUTES
router.get('/create/database', createDB)
router.get('/create/table', createTable)
router.post('/create/list', createList)
router.get('/show/todos', showTodos)
router.get('/todo/:id', singleTodo)
router.put('/update/todo/:id', updateTodo)
router.delete('/delete/todo/:id', deleteTodoByid)

module.exports = router;