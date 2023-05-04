import { test, expect } from '@playwright/test';
import GooglePage from '../pages/google.playwright';

test.describe('Google Test', () => {
  test('search on google', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.navigate();
    await googlePage.search('What is ChatGPT');
  });
});
