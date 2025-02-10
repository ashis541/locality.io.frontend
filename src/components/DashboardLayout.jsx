import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          {/* Main content would go here */}
          <div className="p-4 bg-white rounded-lg">
            <p className="text-gray-600">Main dashboard content would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;