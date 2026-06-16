import { Page, expect } from '@playwright/test';
import userData from '../test-data/user-data.json';

export class RegisterPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate directly to registration page
  async navigate() {
    await this.page.goto(userData.baseUrl);
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  async registerUser(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string,
    ssn: string,
    username: string,
    password: string
  ) {

    await this.page.locator('#customer\\.firstName').fill(firstName);

    await this.page.locator('#customer\\.lastName').fill(lastName);

    await this.page.locator('#customer\\.address\\.street').fill(address);

    await this.page.locator('#customer\\.address\\.city').fill(city);

    await this.page.locator('#customer\\.address\\.state').fill(state);

    await this.page.locator('#customer\\.address\\.zipCode').fill(zipCode);

    await this.page.locator('#customer\\.phoneNumber').fill(phone);

    await this.page.locator('#customer\\.ssn').fill(ssn);

    await this.page.locator('#customer\\.username').fill(username);

    await this.page.locator('#customer\\.password').fill(password);

    await this.page.locator('#repeatedPassword').fill(password);

    await this.page.getByRole('button', {
      name: 'Register'
    }).click();
  }

  async verifyRegistrationSuccess() {

    await expect(
      this.page.locator('#rightPanel')
    ).toContainText('Your account was created successfully');
  }
}