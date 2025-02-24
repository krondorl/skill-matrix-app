/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import express, { Request, Response, Router } from 'express';
import * as db from '../db/index.ts';
import { QueryResult } from 'pg';
import { Employee } from '../models/employee.ts';
import { Skill } from '../models/skill.ts';

const router: Router = express.Router();

router.get('/employees', async (req, res) => {
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

router.get('/employees/:id', async (req, res) => {
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

router.get('/skills', async (req, res) => {
  const result = await db.query<QueryResult<Skill>>('SELECT * FROM skills');
  res.json(result.rows);
});

router.get('/skills/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query<QueryResult<Skill>>(
    'SELECT * FROM skills WHERE id = $1',
    [id],
  );
  res.send(rows[0]);
});

router.post('/', (req: Request, res: Response) => {
  res.send('POST create user');
});

router.put('/', (req: Request, res: Response) => {
  res.send('PUT update user');
});

router.delete('/', (req: Request, res: Response) => {
  res.send('DELETE user');
});

export default router;
