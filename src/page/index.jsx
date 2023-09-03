import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Dashboard from '../components/Dashboard';

function Page() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar />
        <Dashboard />

      </div>
    </div>
  );
}
export default Page;
