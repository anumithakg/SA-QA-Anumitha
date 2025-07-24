import { Locator, Page } from '@playwright/test';

export class CartPage {

  private page: Page;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
