/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import './App.css';
import EmployeeList from './components/EmployeeList';
import employeesList from '@/constants/employees.json' with { type: 'json' };

function App() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold">⭐ Skill Matrix App</h1>
      </header>
      <main className="my-4">
        <p className="mb-4">You can view the employees' skill matrix here.</p>
        <EmployeeList employees={employeesList} />
      </main>
      <footer className="">Made with ❤️ love and ☕ coffee. Since 2025.</footer>
    </div>
  );
}

export default App;
