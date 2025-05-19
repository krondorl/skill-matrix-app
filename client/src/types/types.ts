/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export type Skill = {
  id: string;
  name: string;
};

export type Employee = {
  id: string;
  name: string;
  team: string;
  domain: string;
  expertise_level: string;
  position: string;
};

export type EmployeeWithSkills = {
  id: string;
  name: string;
  team: string;
  domain: string;
  expertise_level: string;
  position: string;
  skills: Skill[];
};
