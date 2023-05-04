import { chromium } from "playwright";

/**
 * Reference: https://playwright.dev/docs/test-global-setup-teardown
 * @param {import("@playwright/test").FullConfig} config 
 */
async function globalSetup(config ) {
  // const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  // perform global setup like authentication and so on here
  await browser.close();
}

export default globalSetup;