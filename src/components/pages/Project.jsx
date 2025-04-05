import React, { useEffect, useState } from 'react';
import BranchCreationModal from './modals/BranchCreationModal.jsx'
import getAllBranch from '../../'

const Project = () => {
  const [branches, setBranches] = useState([
    { id: 1, name: 'Downtown HQ', address: '123 Main St, New York, NY', phone: '212-555-0101', manager: 'John Smith', employees: 45 },
    { id: 2, name: 'Westside Office', address: '456 Oak Ave, San Francisco, CA', phone: '415-555-0102', manager: 'Sarah Johnson', employees: 28 },
    { id: 3, name: 'Eastside Branch', address: '789 Pine Blvd, Boston, MA', phone: '617-555-0103', manager: 'Michael Chen', employees: 32 },
  ]);

  useEffect(() => {
    
  },[])
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    manager: '',
    employees: '',
  });
  
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSubmitBranch = (branchData) => {
    console.log('Branch data submitted:', branchData);
    // Here you would typically send the data to your backend
    
    // Close modal after successful submission
    setIsModalOpen(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  
  const handleDeleteBranch = (id) => {
    if (window.confirm('Are you sure you want to delete this branch?')) {
      setBranches(branches.filter(branch => branch.id !== id));
      if (selectedBranch && selectedBranch.id === id) {
        setSelectedBranch(null);
      }
    }
  };
  
  const handleViewDetails = (branch) => {
    setSelectedBranch(branch);
  };
  
  const filteredBranches = branches.filter(branch => 
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.manager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Actions Bar */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="w-full sm:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search branches..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          
          <button
            onClick={() => setIsFormVisible(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition duration-150 ease-in-out"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add New Branch
          </button>
        </div>
        
        {/* Branch List and Details View */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Branch List */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Branch Locations</h2>
                <p className="text-sm text-gray-500">Manage your organization's branches</p>
              </div>
              
              {filteredBranches.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {filteredBranches.map((branch) => (
                    <li key={branch.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                            <span className="text-indigo-800 font-bold">{branch.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">{branch.name}</h3>
                            <p className="text-sm text-gray-500">{branch.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleViewDetails(branch)}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                              selectedBranch && selectedBranch.id === branch.id
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            View Details
                          </button>
                          
                          <button
                            onClick={() => handleDeleteBranch(branch.id)}
                            className="text-red-600 hover:text-red-800 p-1.5 hover:bg-red-50 rounded-md"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-6 py-12 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No branches found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchTerm ? 'Try adjusting your search criteria.' : 'Get started by creating a new branch.'}
                  </p>
                  {!searchTerm && (
                    <div className="mt-6">
                      <button
                        onClick={() => setIsFormVisible(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        Add New Branch
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Branch Details */}
          <div className="w-full lg:w-1/3">
            {selectedBranch ? (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-indigo-50">
                  <h2 className="text-lg font-medium text-gray-900">Branch Details</h2>
                </div>
                
                <div className="px-6 py-4">
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-3xl text-indigo-800 font-bold">{selectedBranch.name.charAt(0)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-center text-gray-900 mb-6">{selectedBranch.name}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Address</h4>
                      <p className="mt-1 text-sm text-gray-900">{selectedBranch.address}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone</h4>
                      <p className="mt-1 text-sm text-gray-900">{selectedBranch.phone}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Branch Manager</h4>
                      <p className="mt-1 text-sm text-gray-900">{selectedBranch.manager}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Number of Employees</h4>
                      <p className="mt-1 text-sm text-gray-900">{selectedBranch.employees}</p>
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => handleDeleteBranch(selectedBranch.id)}
                          className="flex items-center text-red-600 hover:text-red-800"
                        >
                          <svg
                            className="h-4 w-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          View Details
                        </button>


                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          Edit Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Branch Details</h2>
                </div>
                
                <div className="px-6 py-12 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No branch selected</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Select a branch to view its details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Add Branch Modal */}
      {isModalOpen && (
         <BranchCreationModal 
         isOpen={isModalOpen}
         onClose={handleCloseModal}
         onSubmit={handleSubmitBranch}
       />
      )}
    </div>
  );
};

export default Project;