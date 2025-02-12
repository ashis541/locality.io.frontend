import React from 'react';
import { Header } from './Header.jsx';
import { Sidebar } from './Sidebar.jsx';
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import { useState } from 'react';
const DashboardLayout = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <Project />;
      // case 'messages':
      //   return <MessagePage />;
      // case 'board':
      //   return <BoardPage />;
      // case 'notifications':
      //   return <NotificationPage />;
      // case 'clients':
      //   return <ClientPage />;
      // case 'settings':
      //   return <SettingsPage />;
      // case 'plans':
      //   return <PlansPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1">
        <Header currentPage={currentPage} />
        <div className="p-6">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;