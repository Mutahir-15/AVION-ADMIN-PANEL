'use client';
import { useState } from 'react';
import { FiLock, FiArrowRight } from 'react-icons/fi';

interface AuthProps {
  onLogin: () => void;
}

export default function Auth({ onLogin }: AuthProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsInvalid(false);
    setIsLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Login failed');
      }

      setUsername('');
      setPassword('');
      onLogin();
    } catch (error) {
      setIsInvalid(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              disabled={isLoading}
            />
          </div>
          {isInvalid && (
            <div className="text-red-600 text-base flex items-center gap-3 animate-shake">
              <FiLock className="flex-shrink-0" />
              Authentication failed. Please check your credentials
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-3 py-5 px-8 ${
              isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white font-semibold rounded-xl transition-all duration-300 text-lg`}
          >
            {isLoading ? (
              'Authenticating...'
            ) : (
              <>
                Access Dashboard
                <FiArrowRight className="text-xl" />
              </>
            )}
          </button>
        </form>
        <div className="mt-10 pt-8 border-t border-gray-100">
          <div className="text-center">
            <p className="text-gray-500">
              Need help?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}