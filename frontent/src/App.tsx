import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { TestPage } from './pages/TestPage';
import { HistoryPage } from './pages/HistoryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TestResult } from './types';
import AuthPage from './pages/AuthPage';

function App() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  const handleAddResult = (newResult: TestResult) => {
    setTestResults((prev) => [newResult, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/test" element={<TestPage results={testResults} onAddResult={handleAddResult} />} />
            <Route path="/history" element={<HistoryPage results={testResults} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
