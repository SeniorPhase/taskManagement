// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List component="nav">
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemText primary="My tasks" />
        </ListItem>
        <ListItem button component={Link} to="/notifications">
          <ListItemText primary="Notifications" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/logout">
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
