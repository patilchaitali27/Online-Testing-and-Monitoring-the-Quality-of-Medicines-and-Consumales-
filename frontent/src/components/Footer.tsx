import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Logo and Description */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <BeakerIcon className="h-5 w-5 text-blue-400" />
              <span className="font-semibold text-base">pH Test</span>
            </div>
            <p className="text-gray-400 leading-snug">
              Ensuring medicine quality through accurate pH verification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-sm mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/test" className="text-gray-400 hover:text-white transition">
                  New Test
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-400 hover:text-white transition">
                  Test History
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-sm mb-2">Contact</h3>
            <ul className="space-y-1">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contact@phtest.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>123 Test Street, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-3 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} pH Testing System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
