import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 60000,
  reporter: 'list',
  use: {
    baseURL: process.env.SCL_BASE_URL || 'http://127.0.0.1:5181',
    serviceWorkers: 'block',
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'phone', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  webServer: process.env.SCL_BASE_URL ? undefined : {
    command: 'npm run dev -- --host 127.0.0.1 --port 5181',
    url: 'http://127.0.0.1:5181',
    reuseExistingServer: !process.env.CI,
  },
});
