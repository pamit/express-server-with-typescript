import { test, expect } from '@playwright/test';

test.describe('playwright.dev navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});
