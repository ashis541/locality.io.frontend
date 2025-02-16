import React from 'react';
import { Header } from './Header.jsx';
import { Sidebar } from './Sidebar.jsx';
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import { useState,useEffect } from 'react';

const DashboardLayout = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle resize events
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    // Initial check
    checkMobile();
    // Add event listener
    window.addEventListener('resize', checkMobile);
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <Sidebar 
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
       isMobile={isMobile}
       isOpen={isOpen}
       setIsOpen={setIsOpen}
      />
      <div className="flex-1">
        <Header
          currentPage={currentPage}
          isMobile={isMobile}
          setIsOpen={setIsOpen}

        />
        <div className="p-4 md:p-6">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;