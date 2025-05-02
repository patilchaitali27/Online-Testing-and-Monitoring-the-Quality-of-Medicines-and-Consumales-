import React, { useState } from 'react';
import { TestResult as TestResultComponent } from '../components/TestResult';
import { TestResult as TestResultType } from '../types';
import { Search, Filter, Download } from 'lucide-react';

interface HistoryPageProps {
  results: TestResultType[];
}

export function HistoryPage({ results }: HistoryPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredResults = results.filter((result) => {
    const matchesSearch = result.medicineName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === 'all' ||
      (filter === 'authentic' && result.isAuthentic) ||
      (filter === 'fake' && !result.isAuthentic);
    return matchesSearch && matchesFilter;
  });

  const handleDownloadCSV = () => {
    const csvHeader = "Medicine Name,pH Value,Authenticity,Date Tested\n";
    const csvBody = filteredResults
      .map(
        (r) =>
          `${r.medicineName},${r.phValue},${r.isAuthentic ? 'Authentic' : 'Fake/Degraded'},${new Date(r.timestamp).toLocaleString()}`
      )
      .join('\n');

    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(csvHeader + csvBody);
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", "ph_test_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Test History</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search medicines..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Results</option>
              <option value="authentic">Authentic Only</option>
              <option value="fake">Fake/Degraded Only</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleDownloadCSV}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredResults.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <p className="text-gray-500 text-lg">No test results found.</p>
          </div>
        ) : (
          filteredResults.map((result) => (
            <TestResultComponent key={result.id} result={result} />
          ))
        )}
      </div>
    </div>
  );
}
