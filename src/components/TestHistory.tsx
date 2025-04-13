import React from 'react';
import { TestResult as TestResultType } from '../types';
import { TestResult } from './TestResult';

interface TestHistoryProps {
  results: TestResultType[];
}

export function TestHistory({ results }: TestHistoryProps) {
  return (
    <div className="space-y-6">
      {results.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No test results yet.</p>
          <p className="text-gray-400 mt-2">Test results will appear here after you perform a pH test.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <TestResult key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}