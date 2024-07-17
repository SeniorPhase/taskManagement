const express = require('express');
const todoController = require('../controllers/todoController.js');
const authController = require('../controllers/authController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const user = require('../controllers/user.js');
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
router.post('/users', user.createUser);
router.get('/users/:id', authMiddleware, user.getUser);
router.put('/users/:id', authMiddleware, user.updateUser);
router.delete('/users/:id', authMiddleware, user.deleteUser);

module.exports = router;
