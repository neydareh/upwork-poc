import { chromium } from "playwright";

// Reference: https://playwright.dev/docs/test-global-setup-teardown
/**
 * 
 * @param {import("@playwright/test").FullConfig} config 
 */
async function globalSetup(config ) {
  const browser = await chromium.launch();
  await browser.close();
}

export default globalSetup;