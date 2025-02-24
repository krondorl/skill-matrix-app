/**
 * Copyright (c) 2025-present Adam Burucs
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
