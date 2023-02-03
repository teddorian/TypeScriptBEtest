import { test, expect } from '@playwright/test';
import { HomePage } from '/Users/admin/Documents/TypeScriptBEtest/pom/models/HomePage';

test.describe('Home test', () => {
test('Should allow me connect wallet', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.connectWallet();
})
})