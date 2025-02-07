import React from 'react';
import { FaUsers, FaChartLine, FaCog } from 'react-icons/fa';

function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 text-white">
      <section className="max-w-[1440px] mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to the Admin Panel</h1>
          <p className="text-gray-600 text-lg">Manage your application efficiently and effectively.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaUsers className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold">User Management</h2>
            <p className="text-lg">Add, edit, and delete users.</p>
          </div>
          <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaChartLine className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Analytics</h2>
            <p className="text-lg">View detailed analytics and reports.</p>
          </div>
          <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaCog className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Settings</h2>
            <p className="text-lg">Configure application settings.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;