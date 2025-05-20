/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get directory of this script (ESM-friendly)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function setupEnv(targetFolder) {
  const fullPath = path.resolve(__dirname, targetFolder);
  const envPath = path.join(fullPath, '.env');
  const defaultEnvPath = path.join(fullPath, '.env_default');

  if (!fs.existsSync(envPath)) {
    if (fs.existsSync(defaultEnvPath)) {
      fs.renameSync(defaultEnvPath, envPath);
      console.log(`✅ ${targetFolder}/.env_default renamed to .env`);
    } else {
      console.warn(`⚠️ ${targetFolder}/.env_default does not exist`);
    }
  } else {
    console.log(`ℹ️ ${targetFolder}/.env already exists`);
  }
}

setupEnv('../server');
setupEnv('../client');
