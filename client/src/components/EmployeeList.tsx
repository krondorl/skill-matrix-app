import { Employee } from '@/types/types';
import EmployeeCard from './EmployeeCard';

type EmployeeListProps = {
  employees: Employee[];
};

export default function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {employees.map((employee: Employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}
