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
  LogOut
} from 'lucide-react';

const NavItem = ({ icon, label }) => {
  return (
    <li>
      <a 
        href="#" 
        className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:bg-gray-50 rounded-lg text-sm"
      >
        {React.cloneElement(icon, { className: "text-gray-500" })}
        <span>{label}</span>
      </a>
    </li>
  );
};

export const Sidebar = () => {
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
          {/* Dashboard - Active State */}
          <li>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-indigo-50">
              <Home size={18} className="text-indigo-600" />
              <span className="text-indigo-600 font-medium text-sm">Dashboard</span>
            </a>
          </li>

          {/* Navigation Items */}
          <NavItem icon={<FolderOpen size={18} />} label="Project" />
          <NavItem icon={<MessageSquare size={18} />} label="Message" />
          <NavItem icon={<Layout size={18} />} label="Board" />
          <NavItem icon={<Bell size={18} />} label="Notification" />
          <NavItem icon={<Users size={18} />} label="Client" />
          <NavItem icon={<Settings size={18} />} label="Setting" />
          <NavItem icon={<List size={18} />} label="Plans" />
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