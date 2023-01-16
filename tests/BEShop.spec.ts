import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://260-demo-futantan.vercel.app/demo/tailor/');
  });
test.describe('BrandExtender Shop', () => {
  test('should allow me open Suit page', async ({ page }) => {
    const locator = page.locator('//div[text()="1013"]');
    await locator.click();
  }),
  test('should allow me allow select Clothing, Accesories, Background and go to Preview page', async ({ page }) => {
    
    await page.locator('(//img[@class="w-full block"])[2]').click();
    await page.locator('#carouselheadgear > #slide0 > .ml-4 > .overflow-hidden > .flex').click();
    await page.locator('#carouselbackground > #slide0 > .ml-4 > .overflow-hidden > .flex').click();
    await page.locator('(//img[@alt="close"])[2]').click();
    const locator = page.locator('//span[text()="3% Lifetime Royalties + utility"]');
    await expect(locator).toBeVisible();
    await page.locator('//img[@alt="question"]').click();
    const locator2 = page.locator('//div[text()="How are royalties distributed?"]');
    await expect(locator).toBeVisible();
    await page.locator('//button[contains(@class,"h-8 w-8")]').click();
    await page.getByRole('button', { name: 'Preview' }).click();
    const locator3 = page.locator('//p[text()="preview"]');
    await expect(locator).toBeVisible();
})
})