const express = require('express');
const todoController = require('../controllers/todoController');
const userController = require('server/controllers/userController.js');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Todo routes
router.post('/todos', authMiddleware, todoController.createTodo);
router.get('/todos', authMiddleware, todoController.getTodos);
router.put('/todos/:id', authMiddleware, todoController.updateTodo);
router.delete('/todos/:id', authMiddleware, todoController.deleteTodo);

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', authMiddleware, userController.getUser);
router.put('/users/:id', authMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, userController.deleteUser);

module.exports = router;
