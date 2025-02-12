// Header.jsx
import React from 'react';
import { Search,Menu } from 'lucide-react';

export const Header = ({ currentPage, isMobile, setIsOpen }) => {
  const getPageTitle = () => {
    const titles = {
      'dashboard': 'Dashboard',
      'projects': 'Projects',
      'messages': 'Messages',
      'board': 'Board',
      'notifications': 'Notifications',
      'clients': 'Clients',
      'settings': 'Settings',
      'plans': 'Plans'
    };
    return titles[currentPage] || 'Dashboard';
  };

  return (
    <div className="w-full px-4 md:px-6 py-4 bg-white flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-1 -ml-1 text-gray-500 hover:text-gray-700 md:hidden"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">
          {getPageTitle()}
        </h1>
      </div>

      <div className="flex-1 max-w-2xl mx-8 hidden md:block">
        <div className="relative">
          <input 
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-violet-100 rounded-lg">
          <span className="text-sm font-medium text-violet-900">ID</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-violet-900"
          >
            <path 
              d="M4 6L8 10L12 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <img 
            src="/api/placeholder/32/32"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-medium text-gray-900">ASRIL IBRAHIM</span>
            <span className="text-xs text-gray-500">asril.ibrahim@mockmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};