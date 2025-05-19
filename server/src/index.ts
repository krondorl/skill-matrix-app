/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import express, { Express } from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import dotenv from 'dotenv';
import employeesRouter from './routes/employees.ts';
import skillsRouter from './routes/skills.ts';
import {
  MAX_RETRIES,
  POSTGRES_HOST,
  POSTGRES_PORT,
  RETRY_DELAY,
  waitForDatabase,
} from './lib/wait-for-db.ts';

dotenv.config();

const app: Express = express();
const port = 4566;

console.log();
console.log('⭐ Skill Matrix App');
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

const limiter = rateLimit({
  windowMs: 1000,
  limit: 1,
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];

const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Origin allowed
    } else {
      callback(new Error('Not allowed by CORS')); // Origin not allowed
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(limiter);
app.use(express.json());
app.use('/api/employees', employeesRouter);
app.use('/api/skills', skillsRouter);
