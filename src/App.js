import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
