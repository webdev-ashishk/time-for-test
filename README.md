# setup a Testing Library for React

### step -1 Installing dependencies

```
       npm install -D vitest jsdom
        @testing-library/js-dom
        @testing-library/react
       @testing-library/user-event
```

### step-2 configure vite.config.js

```
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

```

# step-3 config package.json

```
"test:"vitest"
```
### REady to upload