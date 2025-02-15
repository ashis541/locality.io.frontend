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
  const navItems = [
    { label: "Dashboard", icon: <Home size={18} />, page: "dashboard" },
    { label: "Projects", icon: <FolderOpen size={18} />, page: "projects" },
    { label: "Messages", icon: <MessageSquare size={18} />, page: "messages" },
    { label: "Notifications", icon: <Bell size={18} />, page: "notifications" },
  ];
  
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
              {navItems.map((item) => (
                <NavItem
                  key={item.page}
                  icon={item.icon}
                  label={item.label}
                  isActive={currentPage === item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    if (isMobile) setIsOpen(false);
                  }}
                />
              ))}
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