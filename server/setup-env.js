/**
 * Copyright (c) 2025-present Adam Burucs
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '.env');
const defaultEnvPath = path.join(__dirname, '.env_default');

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(defaultEnvPath)) {
    fs.renameSync(defaultEnvPath, envPath);
    console.log('.env_default renamed to .env');
  } else {
    console.log('.env_default does not exist');
  }
} else {
  console.log('.env already exists');
}
