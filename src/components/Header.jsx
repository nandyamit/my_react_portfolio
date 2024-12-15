
// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // Navigation items array
  const navigation = [
    { name: 'About Me', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <Link to="/" className="hover:text-blue-400">
              Amit Nandy
            </Link>
          </div>
          
          <nav>
            <ul className="flex flex-wrap gap-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`hover:text-blue-400 transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-blue-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;