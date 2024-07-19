import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Checkbox, Button, TextField } from '@mui/material';
import './TaskList.css';

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTask, setNewTask] = useState({ title: '', body: '' });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/todos/2`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [userId]);

  const handleCheckboxChange = async (taskId, completed) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
      });
      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, completed: !completed } : task
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newTask, userId }), // Assuming the task has a userId field
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const newTaskFromServer = await response.json();
      setTasks(prevTasks => [...prevTasks, newTaskFromServer]);
      setNewTask({ title: '', body: '' }); // Clear the form
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="task-list">
      <h2>My tasks ({tasks.length})</h2>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id, task.completed)}
            />
            <ListItemText primary={task.title} secondary={task.body} />
            <Button variant="contained" color="secondary" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
      <div className="add-task-form">
        <TextField
          label="Title"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Body"
          name="body"
          value={newTask.body}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="secondary" onClick={handleAddTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default TaskList;
