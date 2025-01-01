import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Sets jsdom as the test environment (for DOM manipulations)
    globals: true, // Allows using global test functions like `describe`, `test`, `expect`
    include: ['**/*.test.{js,ts,jsx,tsx}'], // Glob pattern for test files
  },
});
