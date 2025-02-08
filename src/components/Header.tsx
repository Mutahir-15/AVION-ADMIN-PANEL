import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-gray-800">
      <section className="max-w-[1440px] mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">AVION Admin Dashboard</h1>
        <nav className="flex items-center">
          <ul className="flex gap-8 text-lg text-white">
            <li>
              <Link href="/">
                <span className="hover:text-gray-400 cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/orders">
                <span className="hover:text-gray-400 cursor-pointer">Orders</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <span className="hover:text-gray-400 cursor-pointer">Dashboard</span>
              </Link>
            </li>
          </ul>
          <div className="relative ml-8">
            <button className="flex items-center text-white focus:outline-none">
              <FaUserCircle className="text-3xl" />
              <span className="ml-2">Admin</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 hidden group-hover:block">
              <Link href="/profile">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Profile</span>
              </Link>
              <Link href="/settings">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Settings</span>
              </Link>
              <Link href="/logout">
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Logout</span>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Header;