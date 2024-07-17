const { Todo, User } = require('../models');

exports.createTodo = async (req, res) => {
  const { title, body, completed } = req.body;

  try {
    const todo = await Todo.create({
      title,
      body,
      completed,
     // userId: req.user.id
    });
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};








exports.getTodos = async (req, res) => {

  id = req.params.userId
  
  try {
    let todos;
    const user = await User.findOne({ where: { id: id } });

    if (user.category === 'admin') {
      todos = await Todo.findAll();
   
    } else {
     
      todos = await Todo.findAll({ where: { userId: id } });
    
      
    }
    res.json(todos);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateTodo = async (req, res) => {
  const { title, body, completed } = req.body;

  try {
    let todo = await Todo.findOne({ where: { id: req.params.id, userId: req.user.id } });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo = await Todo.update(
      { title, body, completed },
      { where: { id: req.params.id } }
    );
    res.json({ message: 'Todo updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ where: { id: req.params.id, userId: req.user.id } });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    await Todo.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
