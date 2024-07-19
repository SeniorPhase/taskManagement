
import React from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';

const tasks = [
  { id: 1, text: 'Finish monthly reporting', completed: true, dueDate: 'Today' },
  { id: 2, text: 'Contract signing', completed: false, dueDate: 'Today' },

];

const TaskList = () => {
  return (
    <div className="task-list">
      <h2>My tasks (05)</h2>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <Checkbox checked={task.completed} />
            <ListItemText primary={task.text} secondary={task.dueDate} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList;
