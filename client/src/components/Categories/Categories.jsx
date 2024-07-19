// Categories.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const categories = [
  'Work',
  'Family',
  'Freelance work Q1',
  'Conference planning'
];

const Categories = () => {
  return (
    <div className="categories">
      <h2>My categories</h2>
      <List>
        {categories.map((category, index) => (
          <ListItem key={index}>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Categories;
