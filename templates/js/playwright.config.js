import { defineConfig, devices } from "@playwright/test";

const config = defineConfig({
  fullyParallel: true,
  workers: undefined,
  reporter: [
    ["list"],
    [
      "html",
      { open: "never", outputFolder: "html-report", outputFile: "report.html" },
    ],
  ],
  testDir: "tests",
  retries: 1,
  use: {
    baseURL: "https://playwright.dev",
    ignoreHTTPSErrors: true,
    trace: "retry-with-trace",
    video: "retry-with-video",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "desktop firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "desktop safari",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});

export default config;
