import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {

  private page: Page;
  private firstNameField: Locator;
  private lastNameField: Locator;
  private zipCode: Locator;
  private continueButton: Locator;
  private finishButton: Locator;
  private orderConfirmationHeader: Locator;
  private orderConfirmationMessage: Locator;
  private backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.zipCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.orderConfirmationHeader = page.locator('.complete-header');
    this.orderConfirmationMessage = page.locator('.complete-text');
    this.backHomeButton = page.locator('#back-to-products')
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.zipCode.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async orderConfirmation() {
    await expect(this.orderConfirmationHeader).toHaveText('Thank you for your order!');
    await expect(this.orderConfirmationMessage).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }

  async backHome() {
    await this.backHomeButton.click();
  }
}
