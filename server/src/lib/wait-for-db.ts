/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { exec } from 'child_process';

export const POSTGRES_HOST: string = process.env.POSTGRES_HOST || 'postgres';
export const POSTGRES_PORT: number = 5432;
export const MAX_RETRIES: number = 6;
export const RETRY_DELAY: number = 5000; // 5 seconds

export function checkDatabase(host: string, port: number): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(
      `docker exec postgres pg_isready -h ${host} -p ${port}`,
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

export async function waitForDatabase(
  retries: number,
  delay: number,
  host: string,
  port: number,
): Promise<boolean> {
  for (let i = 0; i < retries; i++) {
    try {
      await checkDatabase(host, port);
      return true;
    } catch (error) {
      console.log(`⏳ Waiting for database... (${i + 1}/${retries})`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  return false;
}
