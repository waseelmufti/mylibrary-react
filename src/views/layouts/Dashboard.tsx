import React from 'react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import Footer from '../components/dashboard/Footer';
import Content from '../components/dashboard/Content';
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div id='app'>
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};

export default Dashboard;