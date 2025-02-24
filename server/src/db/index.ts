/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import dotenv from 'dotenv';
import pg, { QueryResult } from 'pg';

const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
});

export const query = async <T extends QueryResult>(
  text: string,
  params?: any[],
): Promise<QueryResult<T>> => {
  return pool.query<T>(text, params);
};
