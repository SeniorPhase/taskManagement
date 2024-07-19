
import React from 'react';
import Sidebar from '../../../src/components/SideBar/Sidebar.jsx';
import TaskList from '../../../src/components/TaskList/TaskList.jsx';
import Categories from '../../../src/components/Categories/Categories.jsx';
import MyCalendar from '../../../src/components/Calendar/Calendar.jsx';
import './dashbord.css'
const Dashboard = () => {
  return (
    <div className='body'>
    <div className="dashboard">
      <div className='Sidebar'>
    
      </div>
      <div className="main-content">
     
        <TaskList />
        
    
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
