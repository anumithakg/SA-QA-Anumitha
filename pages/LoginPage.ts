import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {

  private page: Page;
  private username: Locator;
  private password: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;

  
  constructor(page: Page) {

    this.page = page; 
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('div.error-message-container.error');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click(); 
  }

  async assertLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }
}