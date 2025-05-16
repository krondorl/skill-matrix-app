/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import express, { Router } from 'express';
import * as db from '../db/index.ts';
import { QueryResult } from 'pg';
import { Employee } from '../models/employee.ts';

const employeesRouter: Router = express.Router();

employeesRouter.get('/', async (_req, res) => {
  try {
    const result = await db.query<QueryResult<Employee>>(
      'SELECT * FROM employees',
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({
      error: 'An error occurred while fetching the employee data.',
    });
  }
});

employeesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query<QueryResult<Employee>>(
      'SELECT * FROM employees WHERE id = $1',
      [id],
    );
    if (rows.length === 0) {
      return res.status(404).json({
        error: `Employee with id ${id} not found.`,
      });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching employee by ID:', error);
    res.status(500).json({
      error: 'An error occurred while fetching the employee data.',
    });
  }
});

export default employeesRouter;
