import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export function AboutPage() {
  const steps = [
    {
      icon: FileText,
      title: 'Select Medicine',
      description: 'Choose the medicine you want to test from our comprehensive database.',
    },
    {
      icon: Shield,
      title: 'Perform pH Test',
      description: 'Use pH paper or a digital pH meter to measure the pH value of the medicine.',
    },
    {
      icon: AlertTriangle,
      title: 'Enter Results',
      description: 'Input the measured pH value into our system.',
    },
    {
      icon: CheckCircle,
      title: 'Get Verification',
      description: 'Receive instant verification of the medicines authenticity based on pH analysis.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About pH Testing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn how our pH testing system helps ensure medicine quality and protect public health through accurate verification.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
            alt="Laboratory"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why pH Testing?</h2>
            <p className="text-gray-600">
              pH testing is a crucial method for verifying medicine quality. Each medicine has a specific pH range that indicates its authenticity and stability. Deviations from this range may suggest counterfeit products or degradation.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
            alt="Medicine testing"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600">
              We maintain a comprehensive database of authentic pH ranges for various medicines. Our system compares test results against these ranges to provide instant verification, helping healthcare providers ensure medicine quality.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 rounded-full p-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}