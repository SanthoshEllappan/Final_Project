import React from 'react';
import Header from './header';
import Sidebar from './navbar';
import { Outlet } from 'react-router-dom'; 

const EmployeeIntro = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <main className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default EmployeeIntro;
