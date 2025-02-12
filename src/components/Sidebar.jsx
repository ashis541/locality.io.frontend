import React from 'react';
import {
  Home,
  FolderOpen,
  MessageSquare,
  Layout,
  Bell,
  Users,
  Settings,
  List,
  LogOut,
} from "lucide-react";

const NavItem = ({ icon, label, isActive, onClick }) => {

  return (
    <li>
      <button 
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm ${
          isActive 
            ? 'bg-indigo-50 text-indigo-600 font-medium' 
            : 'text-gray-500 hover:bg-gray-50'
        }`}
      >
        {React.cloneElement(icon, { 
          className: isActive ? "text-indigo-600" : "text-gray-500" 
        })}
        <span>{label}</span>
      </button>
    </li>
  );
};

export const Sidebar = ({ currentPage, setCurrentPage,isMobile, isOpen, setIsOpen }) => {
  const sidebarBaseClasses = "w-64 bg-white flex flex-col border-r border-gray-100";
  
  // Mobile-specific classes
  const mobileSidebarClasses = `
    fixed inset-y-0 left-0 z-30
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;
  
  // Desktop-specific classes
  const desktopSidebarClasses = "relative min-h-screen";

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        ${sidebarBaseClasses}
        ${isMobile ? mobileSidebarClasses : desktopSidebarClasses}
      `}>
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-medium">P</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">ProLogs</h1>
              <p className="text-[11px] text-gray-500 -mt-1">Project Management</p>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-1">
              <NavItem 
                icon={<Home size={18} />} 
                label="Dashboard" 
                isActive={currentPage === 'dashboard'}
                onClick={() => {
                  setCurrentPage('dashboard');
                  if (isMobile) setIsOpen(false);
                }}
              />
              <NavItem 
                icon={<FolderOpen size={18} />} 
                label="Projects" 
                isActive={currentPage === 'projects'}
                onClick={() => {
                  setCurrentPage('projects');
                  if (isMobile) setIsOpen(false);
                }}
              />
              <NavItem 
                icon={<MessageSquare size={18} />} 
                label="Messages" 
                isActive={currentPage === 'messages'}
                onClick={() => {
                  setCurrentPage('messages');
                  if (isMobile) setIsOpen(false);
                }}
              />
              <NavItem 
                icon={<Bell size={18} />} 
                label="Notifications" 
                isActive={currentPage === 'notifications'}
                onClick={() => {
                  setCurrentPage('notifications');
                  if (isMobile) setIsOpen(false);
                }}
              />
            </ul>
          </nav>
        </div>

        {/* Logout button */}
        <div className="mt-auto p-6">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};