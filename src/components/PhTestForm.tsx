import React, { useState } from 'react';
import { Medicine } from '../types';
import { medicines } from '../data/medicines';

interface PhTestFormProps {
  onSubmit: (medicineId: string, phValue: number) => void;
}

export function PhTestForm({ onSubmit }: PhTestFormProps) {
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [phValue, setPhValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMedicine && phValue) {
      onSubmit(selectedMedicine, parseFloat(phValue));
      setSelectedMedicine('');
      setPhValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="medicine" className="block text-sm font-medium text-gray-700 mb-2">
          Select Medicine
        </label>
        <select
          id="medicine"
          value={selectedMedicine}
          onChange={(e) => setSelectedMedicine(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors duration-200"
          required
        >
          <option value="">Select a medicine...</option>
          {medicines.map((medicine) => (
            <option key={medicine.id} value={medicine.id}>
              {medicine.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ph" className="block text-sm font-medium text-gray-700 mb-2">
          pH Value
        </label>
        <div className="relative">
          <input
            type="number"
            id="ph"
            value={phValue}
            onChange={(e) => setPhValue(e.target.value)}
            step="0.1"
            min="0"
            max="14"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-colors duration-200"
            required
            placeholder="Enter pH value (0-14)"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-gray-500">pH</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200"
      >
        Test Medicine
      </button>
    </form>
  );
}