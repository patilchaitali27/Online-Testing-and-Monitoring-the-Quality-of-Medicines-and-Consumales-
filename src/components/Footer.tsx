import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <BeakerIcon className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-lg">pH Test</span>
            </div>
            <p className="text-gray-400 text-sm">
              Ensuring medicine quality through precise pH testing and verification
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/test" className="text-gray-400 hover:text-white transition-colors">
                  New Test
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-400 hover:text-white transition-colors">
                  Test History
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-3">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">contact@phtest.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">123 Test Street, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} pH Testing System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
