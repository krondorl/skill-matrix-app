/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import express, { Router } from 'express';
import * as db from '../db/index.ts';
import { QueryResult } from 'pg';
import { Skill } from '../models/skill.ts';

const skillsRouter: Router = express.Router();

skillsRouter.get('/', async (_req, res) => {
  try {
    const result = await db.query<QueryResult<Skill>>('SELECT * FROM skills');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({
      error: 'An error occurred while fetching the skills data.',
    });
  }
});

skillsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query<QueryResult<Skill>>(
      'SELECT * FROM skills WHERE id = $1',
      [id],
    );
    if (rows.length === 0) {
      return res.status(404).json({
        error: `Skill with id ${id} not found.`,
      });
    }
    res.send(rows[0]);
  } catch (error) {
    console.error('Error fetching skill by ID:', error);
    res.status(500).json({
      error: 'An error occurred while fetching the skill data.',
    });
  }
});

export default skillsRouter;
