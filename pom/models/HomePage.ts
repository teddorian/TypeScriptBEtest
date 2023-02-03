import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly visitBtn: Locator;
  readonly modalTitle: Locator;

  constructor(page: Page) {
        
        this.page = page;
        this.visitBtn = page.locator('div[class="lg:mt-8 lg:flex"] button');
        this.modalTitle = page.locator('h4.mx-auto.mt-10');
        
    }
    async goto() {
        await this.page.goto('https://brandextender.io/demo/');
      }
      async connectWallet() {
        await this.visitBtn.click();
        await expect(this.modalTitle).toBeVisible();
        await this.page.close();
      }
}