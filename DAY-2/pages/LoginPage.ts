import { Page, expect } from '@playwright/test';
import userData from '../test-data/user-data.json';

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to ParaBank Home Page
  async navigate() {
    await this.page.goto(userData.baseUrl);
  }

  // Login
  async login(username: string, password: string) {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[value="Log In"]').click();
  }

  async verifyLoginSuccess() {
    const logoutLink = this.page.getByRole('link', {
      name: 'Log Out'
    });

    await expect(logoutLink).toBeVisible();
  }
}