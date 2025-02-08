import React from 'react';

function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 ">
      <section className="max-w-[1440px] mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
          <p className="text-gray-600">Overview of your application&apos;s performance and statistics.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Users</h2>
            <p className="text-lg">1,234</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Sales</h2>
            <p className="text-lg">$12,345</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Errors</h2>
            <p className="text-lg">23</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;