import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

// const preset = definePreset(material, {
//   semantic: {
//     primary: {
//       50: '#e6f3ff', // Very light blue
//       100: '#cce7ff', // Light blue
//       200: '#99cfff', // Lighter blue
//       300: '#66b7ff', // Light blue
//       400: '#339fff', // Medium blue
//       500: '#011235', // Primary Color 1 - Blue (base)
//       600: '#010f2e', // Darker blue (hover)
//       700: '#010c26', // Even darker blue (active)
//       800: '#01091f', // Much darker blue
//       900: '#000617', // Very dark blue
//       950: '#00030f', // Darkest blue
//     },
//     secondary: {
//       50: '#fef2f2', // Very light red
//       100: '#fee2e2', // Light red
//       200: '#fecaca', // Lighter red
//       300: '#fca5a5', // Light red
//       400: '#f87171', // Medium red
//       500: '#D11235', // Primary Color 2 - Dark Grey/Red (base)
//       600: '#bc0f2e', // Darker red (hover)
//       700: '#a70d28', // Even darker red (active)
//       800: '#920b22', // Much darker red
//       900: '#7d091d', // Very dark red
//       950: '#680717', // Darkest red
//     },
//     surface: {
//       0: '#ffffff', // White
//       50: '#f6f6f6', // Light Grey - Background Color
//       100: '#f0f0f0', // Light Grey variations
//       200: '#e0e0e0',
//       300: '#c0c0c0',
//       400: '#a0a0a0',
//       500: '#6a6a6a', // Secondary Color 2 - Dark Grey
//       600: '#555555',
//       700: '#404040',
//       800: '#333333', // Secondary Color 1 - Black
//       900: '#1a1a1a',
//       950: '#0a0a0a',
//     },
//     // Semantic colors with hover states
//     green: {
//       500: '#57cb9d', // Success - Green (base)
//       600: '#4cb085', // Success hover
//       700: '#42956d', // Success active
//     },
//     red: {
//       500: '#ff4343', // Error - Red (base)
//       600: '#e63c3c', // Error hover
//       700: '#cc3535', // Error active
//     },
//     orange: {
//       500: '#fdc521', // Alert - Amber (base)
//       600: '#e4b11e', // Alert hover
//       700: '#cb9e1b', // Alert active
//     },
//     // Additional semantic mappings
//     success: '#57cb9d', // Green
//     info: '#011235', // Primary Blue
//     warn: '#fdc521', // Amber
//     error: '#ff4343', // Red
//     danger: '#ff4343', // Red
//   },
// });

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          ripple: true,
          prefix: 'p',
          darkModeSelector: '.dark-mode',
          cssLayer: false,
          // Complete color palette from design system
        },
      },
    }),
  ],
};
