import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import sampleImg from '../assets/image.png'; // ✅ Adjust path if different

export function LandingPage() {
  const features = [
    'Instant pH verification',
    'Comprehensive medicine database',
    'Real-time authenticity check',
    'Detailed test history',
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto lg:flex">
        {/* Left Text Content */}
        <div className="z-10 w-full lg:w-1/2 px-6 py-16 sm:px-8 lg:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Verify Medicine Quality</span>
            <span className="block text-blue-600">with pH Testing</span>
          </h1>
          <p className="mt-4 text-base text-gray-500 sm:mt-6 sm:text-lg md:text-xl">
            Ensure the authenticity of medicines through our advanced pH testing system. Quick, reliable, and accurate results to protect public health.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              to="/test"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium"
            >
              Start Testing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-md text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-80 sm:h-96 lg:h-auto">
          <img
            src={sampleImg}
            alt="Medicine testing"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our System?
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-md text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="text-lg font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
