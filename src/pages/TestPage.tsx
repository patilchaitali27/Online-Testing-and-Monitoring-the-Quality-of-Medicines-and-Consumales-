import React from 'react';
import { PhTestForm } from '../components/PhTestForm';
import { TestHistory } from '../components/TestHistory';
import { TestResult } from '../types';
import { medicines } from '../data/medicines';

interface TestPageProps {
  results: TestResult[];
  onAddResult: (result: TestResult) => void;
}

export function TestPage({ results, onAddResult }: TestPageProps) {
  const handleTestSubmit = (medicineId: string, phValue: number) => {
    const medicine = medicines.find((m) => m.id === medicineId);
    if (!medicine) return;

    const isAuthentic = phValue >= medicine.minPh && phValue <= medicine.maxPh;

    const newResult: TestResult = {
      id: Date.now().toString(),
      medicineId,
      medicineName: medicine.name,
      phValue,
      isAuthentic,
      timestamp: new Date().toISOString(),
    };

    onAddResult(newResult); // Call the parent updater
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">New Test</h2>
            <p className="text-blue-100 mt-1">Enter medicine details and pH value</p>
          </div>
          <div className="p-6">
            <PhTestForm onSubmit={handleTestSubmit} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Recent Tests</h2>
            <p className="text-gray-300 mt-1">View your latest test results</p>
          </div>
          <div className="p-6">
            <TestHistory results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}
