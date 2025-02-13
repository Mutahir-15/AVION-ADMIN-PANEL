'use client';
import { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import DashboardPage from "@/components/DashboardPage";
import HomePage from "@/components/HomePage";
import OrdersPage from "@/components/OrdersPage";
import { FaHome, FaTachometerAlt, FaClipboardList } from 'react-icons/fa';
import Auth from '@/components/Auth';

export default function AdminPanel() {
  const [activePage, setActivePage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const cookies = parseCookies();
      setIsAuthenticated(!!cookies.isAuthenticated);
    };
    checkAuth();
  }, []);

  const handleLogin = () => {
    setCookie(null, 'isAuthenticated', 'true', {
      maxAge: 86400, // 1 day
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <aside className="w-full md:w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4">
          <button
            className={`w-full text-left px-4 py-2 mb-2 rounded transition-colors ${
              activePage === 'home' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setActivePage('home')}
          >
            <FaHome className="inline-block mr-2" />
            Home
          </button>
          <button
            className={`w-full text-left px-4 py-2 mb-2 rounded transition-colors ${
              activePage === 'orders' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setActivePage('orders')}
          >
            <FaClipboardList className="inline-block mr-2" />
            Orders
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded transition-colors ${
              activePage === 'dashboard' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setActivePage('dashboard')}
          >
            <FaTachometerAlt className="inline-block mr-2" />
            Dashboard
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {activePage === 'home' && <HomePage />}
        {activePage === 'orders' && <OrdersPage />}
        {activePage === 'dashboard' && <DashboardPage />}
      </main>
    </div>
  );
}