import { Page, expect } from '@playwright/test';

export class OpenAccountPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async createSavingsAccount() {
        // select SAVINGS from the account type dropdown
        await this.page.locator('#type').selectOption('SAVINGS');
        await this.page.getByRole('button', { name: 'Open New Account' }).click();
    }

    async createCheckingAccount() {
        // select CHECKING from the account type dropdown
        await this.page.locator('#type').selectOption('CHECKING');
        await this.page.getByRole('button', { name: 'Open New Account' }).click();
    }

    async verifyAccountCreated() {

        const message =
            this.page.locator('#openAccountResult p').first();

        await expect(message)
            .toContainText(
                'Congratulations'
            );

        const accountId =
            await this.page
                .locator('#newAccountId')
                .textContent();

        console.log(
            'Created Account ID:',
            accountId
        );

        return accountId?.trim();
    }

    // returns the new account id shown after account creation
    async getCreatedAccountId() {

        console.log(
            '===================='
        );

        console.log(
            await this.page
                .locator('#openAccountResult')
                .innerHTML()
        );
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);

        console.log(
            '===================='
        );

        const accountIdLocator =
            this.page.locator('#newAccountId');

        const accountId =
            await accountIdLocator.textContent();

        console.log(
            'Account ID:',
            accountId
        );

        return accountId?.trim() || '';
    }
}