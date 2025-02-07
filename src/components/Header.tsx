import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800">
      <section className="max-w-[1440px] mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">AVION Admin Dashboard</h1>
        <nav>
          <ul className="flex gap-8 text-lg text-white">
            <li>
              <Link href="/">
              Home
              </Link>
            </li>
            <li>
              <Link href="/orders">
              Orders
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
              Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;