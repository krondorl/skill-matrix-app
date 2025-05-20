/**
 * Copyright (c) 2025-present Adam Burucs
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/** Return colored class name using Tailwind colors. */
export function colorizeDeveloperType(developer: string): string {
  if (developer === 'frontend developer') {
    return 'text-blue-600';
  }
  return 'text-emerald-600';
}

/** Return expertise star icons. */
export function showStarIcons(expertise: string): string {
  switch (expertise[0]) {
    case 'A':
      return '⭐';
    case 'B':
      return '⭐⭐';
    case 'C':
      return '⭐⭐⭐';
    default:
      return '';
  }
}
