// src/components/Footer.jsx
import React from 'react';

function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/nandyamit',
      icon: '📦'  // Fixed emoji
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amit-nandy-bab83014/',
      icon: '💼'  // Fixed emoji
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <span className="mr-2">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-center mt-4 text-gray-400">
          © {new Date().getFullYear()} Amit Nandy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;