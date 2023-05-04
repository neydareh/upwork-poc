import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './src/playwright-tests/specs',
  testMatch: '*.spec.js',
  testIgnore: '**/node_modules/**/*',
  fullyParallel: true, 
  reporter: 'html',
  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  globalSetup: require.resolve('./src/playwright-tests/global-setup'),
  projects: [
    {
      name: 'chromium', 
      use: { 
        ...devices['Desktop Chrome'], 
        bypassCSP: true, 
        baseURL: 'https://www.google.com',
      },
    }
  ]
})