import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { TestResult as TestResultType } from '../types';

interface TestResultProps {
  result: TestResultType;
}

export function TestResult({ result }: TestResultProps) {
  const statusStyles = result.isAuthentic
    ? 'bg-green-50 border-green-200'
    : 'bg-red-50 border-red-200';

  const iconStyles = result.isAuthentic
    ? 'text-green-500'
    : 'text-red-500';

  const titleStyles = result.isAuthentic
    ? 'text-green-800'
    : 'text-red-800';

  return (
    <div className={`p-6 rounded-xl border-2 ${statusStyles} transform hover:scale-102 transition-transform duration-200`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 ${iconStyles}`}>
          {result.isAuthentic ? (
            <CheckCircle className="h-8 w-8" />
          ) : (
            <AlertTriangle className="h-8 w-8" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-semibold ${titleStyles} mb-2`}>
            {result.isAuthentic ? 'Medicine is authentic' : 'Medicine may be fake or degraded'}
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-500">Medicine:</span>
              <span className="text-gray-900">{result.medicineName}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-500">pH Value:</span>
              <span className="text-gray-900">{result.phValue.toFixed(1)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-500">Test Date:</span>
              <span className="text-gray-900">
                {new Date(result.timestamp).toLocaleDateString()} {new Date(result.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}