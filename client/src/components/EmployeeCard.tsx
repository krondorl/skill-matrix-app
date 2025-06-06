/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { type Employee } from '@/types/types';
import EmployeePosition from './EmployeePosition';
import EmployeeExpertise from './EmployeeExpertise';

type EmployeeProps = {
  employee: Employee;
};

export default function EmployeeCard({ employee }: EmployeeProps) {
  return (
    <Card className="employee_card">
      <CardHeader>
        <div>👤</div>
        <CardTitle>{employee?.name}</CardTitle>
        <CardDescription>employee</CardDescription>
      </CardHeader>
      <CardContent>
        <EmployeePosition position={employee?.position} />
        <p>
          expertise level:{' '}
          <EmployeeExpertise expertise={employee?.expertise_level} />
        </p>
      </CardContent>
    </Card>
  );
}
