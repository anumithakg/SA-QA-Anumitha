import { Locator, Page } from '@playwright/test';

export class ProductsPage {

  private page: Page;
  private firstItemAddToCartButton: Locator;
  private shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstItemAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.firstItemAddToCartButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  } 
}
