/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { type Employee } from '@/types/types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import EmployeeCard from './EmployeeCard';

type EmployeeProps = {
  employee: Employee;
};

export default function EmployeeDialog({ employee }: EmployeeProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <EmployeeCard employee={employee} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{employee?.name}</DialogTitle>
          <DialogDescription>employee</DialogDescription>
          <div>{employee?.position}</div>
          <div>expertise level: {employee?.expertise_level}</div>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
