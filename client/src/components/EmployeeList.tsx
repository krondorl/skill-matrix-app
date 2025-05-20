/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Employee } from '@/types/types';
import EmployeeDialog from './EmployeeDialog';

type EmployeeListProps = {
  employees: Employee[];
};

export default function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {employees.map((employee: Employee) => (
        <EmployeeDialog key={employee.id} employee={employee} />
      ))}
    </div>
  );
}
