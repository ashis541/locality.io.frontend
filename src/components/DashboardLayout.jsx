import React, { useState, useEffect } from "react";
import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";

const DashboardLayout = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "projects":
        return <Project />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMobile={isMobile}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Main Layout */}
      <div className="flex flex-col flex-1 h-screen">
        {/* Header */}
        <Header currentPage={currentPage} isMobile={isMobile} setIsOpen={setIsOpen} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
