import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider } from '@mui/material';


function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <List component="nav">
      <ListItem button component={Link} to="/login">
          <ListItemText primary="Log out" />
        </ListItem>
        </List>
    </div>
  );
}

export default Home;
