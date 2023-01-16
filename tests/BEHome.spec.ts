import { test, expect, type Page } from '@playwright/test';

test.describe('BrandExtender Home', () => {
  test('should allow me visit Home page', async ({ page }) => {
    await page.goto('https://brandextender.io/demo/');
    await page.locator('//button[text()="Connect Wallet"]').click();
    const locator = page.locator('//h4[text()="Connect your wallet"]');
    await expect(locator).toBeVisible();
  })
})