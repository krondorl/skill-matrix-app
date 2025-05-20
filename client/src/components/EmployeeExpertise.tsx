/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { showStarIcons } from '@/helpers/helpers';

type EmployeeExpertiseProps = {
  expertise: string;
};

export default function EmployeeExpertise({
  expertise,
}: EmployeeExpertiseProps) {
  return <p>{showStarIcons(expertise)}</p>;
}
