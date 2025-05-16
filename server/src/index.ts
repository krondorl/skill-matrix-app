/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import express, { Express } from 'express';
import dotenv from 'dotenv';
import usersRouter from './routes/usersRouter.ts';
import {
  MAX_RETRIES,
  POSTGRES_HOST,
  POSTGRES_PORT,
  RETRY_DELAY,
  waitForDatabase,
} from './lib/wait-for-db.ts';

dotenv.config();

const app: Express = express();
const port = 3000;

console.log();
console.log('Skill Matrix App');
console.log();

const dbConnect = await waitForDatabase(
  MAX_RETRIES,
  RETRY_DELAY,
  POSTGRES_HOST,
  POSTGRES_PORT,
);

if (dbConnect) {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
} else {
  console.error('❌ Database did not become ready in time.');
  process.exit(1);
}

app.use(express.json());
app.use('/api', usersRouter);
