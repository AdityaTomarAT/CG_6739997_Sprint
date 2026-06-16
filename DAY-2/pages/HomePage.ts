import { Page } from '@playwright/test';

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToOpenAccount() {
    await this.page.getByRole('link', { name: 'Open New Account' }).click();
  }

  async goToAccountsOverview() {
    await this.page.getByRole('link', { name: 'Accounts Overview' }).click();
  }

  async goToTransferFunds() {
    await this.page.getByRole('link', { name: 'Transfer Funds' }).click();
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Log Out' }).click();
  }
}