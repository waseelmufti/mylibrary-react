import React from 'react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import Footer from '../components/dashboard/Footer';
import Content from '../components/dashboard/Content';
import "./Dashboard.scss";
import { Navigate, redirect } from 'react-router-dom';
import { getToken } from '../../helpers/authHelper';

const Dashboard: any = () => {
  const token = getToken();

  if(!token){
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <>
    <div id='app'>
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </div>
    </>
  );
};

export default Dashboard;