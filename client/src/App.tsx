/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { useEffect, useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import employeesList from '@/constants/employees.json';
import { Employee } from './types/types';
import { Button } from '@/components/ui/button';

function App() {
  const [employees, setEmployees] = useState<Employee[]>(employeesList);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | object | null>(null);

  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/employees`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEmployees(data);
    } catch (err: unknown) {
      if (typeof err === 'object' || typeof err === 'string') {
        setError(err || 'Failed to fetch employees');
      }
    } finally {
      setLoading(false);
    }
  };

  type Message = typeof error | typeof loading;

  function displayErrorOrLoading(message: Message): Message {
    if (
      message === false ||
      message === '' ||
      message === null ||
      message === undefined
    ) {
      return '🟢 no (none)';
    }
    return message;
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold">⭐ Skill Matrix App</h1>
      </header>
      <main className="my-4">
        <p className="mb-4">You can view the employees' skill matrix here.</p>
        <div className="mb-4">
          <Button onClick={fetchEmployees}>Refresh</Button>
        </div>
        <div>Loading: {displayErrorOrLoading(loading)?.toString()}</div>
        <div className="mb-4">
          Error: {displayErrorOrLoading(error)?.toString()}
        </div>
        <EmployeeList employees={employees} />
      </main>
      <footer className="">Made with ❤️ love and ☕ coffee. Since 2025.</footer>
    </div>
  );
}

export default App;
