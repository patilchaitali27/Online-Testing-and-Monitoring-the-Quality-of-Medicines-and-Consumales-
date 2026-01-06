export interface Medicine {
  id: string;
  name: string;
  minPh: number;
  maxPh: number;
}

export interface TestResult {
  id: string;
  medicineId: string;
  medicineName: string;
  phValue: number;
  isAuthentic: boolean;
  timestamp: string;
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'pharmacist';
}