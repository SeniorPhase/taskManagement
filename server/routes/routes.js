const express = require('express');
const todoController = require('../controllers/todoController.js');
const user = require('../controllers/user.js');
const authController = require('../controllers/authController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Todo routes
router.post('/todos', todoController.createTodo);
router.get('/todos/:userId', todoController.getTodos);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

// User routes
router.post('/users', user.createUser);
router.get('/users/:id', user.getUser);
router.put('/users/:id', user.updateUser);
router.delete('/users/:id', user.deleteUser);

module.exports = router;
