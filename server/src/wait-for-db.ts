/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { exec } from 'child_process';

const POSTGRES_HOST: string = process.env.POSTGRES_HOST || 'postgres'; // Change to "postgres" if using Docker Compose
const POSTGRES_PORT: number = 5432; // Default Postgres port
const MAX_RETRIES: number = 25;
const RETRY_DELAY: number = 5000; // 5 seconds

function checkDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(
      `docker exec postgres pg_isready -h ${POSTGRES_HOST} -p ${POSTGRES_PORT}`,
      (error: Error | null, stdout: string) => {
        if (stdout.includes('accepting connections')) {
          console.log('✅ Database is ready!');
          resolve();
        } else {
          reject(new Error('Database not ready'));
        }
      },
    );
  });
}

async function waitForDatabase(
  retries: number = MAX_RETRIES,
  delay: number = RETRY_DELAY,
): Promise<void> {
  for (let i = 0; i < retries; i++) {
    try {
      await checkDatabase();
      return;
    } catch (error) {
      console.log(`⏳ Waiting for database... (${i + 1}/${retries})`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  console.error('❌ Database did not become ready in time.');
  process.exit(1);
}

waitForDatabase();
