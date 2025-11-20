/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styled-system': path.resolve(__dirname, 'styled-system'),
    },
  },
  test: {
    projects: [
      // Unit tests project (jsdom)
      {
        test: {
          name: 'unit',
          globals: true,
          environment: 'jsdom',
          setupFiles: './vitest.setup.ts',
          include: ['src/**/*.{test,spec}.{ts,tsx}', 'scripts/**/*.{test,spec}.{ts,tsx}'],
          coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
              'node_modules/',
              'styled-system/',
              '*.config.*',
              '**/*.stories.tsx',
              '**/*.d.ts',
            ],
          },
        },
      },
      // Storybook tests project (browser)
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.resolve(__dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
