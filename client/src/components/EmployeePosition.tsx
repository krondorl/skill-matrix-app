/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { colorizeDeveloperType } from '@/helpers/helpers';

type EmployeePositionProps = {
  position: string;
};

export default function EmployeePosition({ position }: EmployeePositionProps) {
  return <p className={colorizeDeveloperType(position)}>{position}</p>;
}
