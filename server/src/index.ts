/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRouter from './routes/usersRouter.ts';

dotenv.config();

const app: Express = express();
const port = 3000;

app.use(cors());

app.use(
  cors({
    origin: 'http://localhost:5173', // Allow only React frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());

app.use('/api', usersRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log(`[server]: CORS is enabled for frontend`);
});
