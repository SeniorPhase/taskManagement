
import React from 'react';
import Sidebar from '../../../src/components/SideBar/Sidebar.jsx';
import TaskList from '../../../src/components/TaskList/TaskList.jsx';
import Categories from '../../../src/components/Categories/Categories.jsx';
import MyCalendar from '../../../src/components/Calendar/Calendar.jsx';
import './dashbord.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <MyCalendar />
        <TaskList />
        <Categories />
    
      </div>
    </div>
  );
};

export default Dashboard;
