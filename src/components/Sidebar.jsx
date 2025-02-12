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

export const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="w-[280px] min-h-screen bg-white px-4 py-6 flex flex-col border-r border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10 pl-2">
        <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-medium">P</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">ProLogs</h1>
          <p className="text-[11px] text-gray-500 -mt-1">Project Management Admin</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="space-y-1">
          <NavItem 
            icon={<Home size={18} />} 
            label="Dashboard" 
            isActive={currentPage === 'dashboard'}
            onClick={() => setCurrentPage('dashboard')}
          />
          <NavItem 
            icon={<FolderOpen size={18} />} 
            label="Project" 
            isActive={currentPage === 'projects'}
            onClick={() => setCurrentPage('projects')}
          />
          <NavItem 
            icon={<MessageSquare size={18} />} 
            label="Message" 
            isActive={currentPage === 'messages'}
            onClick={() => setCurrentPage('messages')}
          />
          <NavItem 
            icon={<Layout size={18} />} 
            label="Board" 
            isActive={currentPage === 'board'}
            onClick={() => setCurrentPage('board')}
          />
          <NavItem 
            icon={<Bell size={18} />} 
            label="Notification" 
            isActive={currentPage === 'notifications'}
            onClick={() => setCurrentPage('notifications')}
          />
          <NavItem 
            icon={<Users size={18} />} 
            label="Client" 
            isActive={currentPage === 'clients'}
            onClick={() => setCurrentPage('clients')}
          />
          <NavItem 
            icon={<Settings size={18} />} 
            label="Setting" 
            isActive={currentPage === 'settings'}
            onClick={() => setCurrentPage('settings')}
          />
          <NavItem 
            icon={<List size={18} />} 
            label="Plans" 
            isActive={currentPage === 'plans'}
            onClick={() => setCurrentPage('plans')}
          />
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};