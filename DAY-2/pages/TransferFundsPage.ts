import { Page, expect } from '@playwright/test';

export class TransferFundsPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async transferFunds(amount: string) {

        // Enter amount
        await this.page
            .locator('#amount')
            .fill(amount);

        // Debug available accounts
        const availableAccounts =
            await this.page
                .locator('#fromAccountId option')
                .allTextContents();

        console.log(
            'Available Accounts:',
            availableAccounts
        );

        // Get first account
        const fromAccount =
            await this.page
                .locator('#fromAccountId option')
                .nth(0)
                .getAttribute('value');

        console.log(
            'From Account:',
            fromAccount
        );

        // Get second account
        const toAccount =
            await this.page
                .locator('#toAccountId option')
                .nth(1)
                .getAttribute('value');

        console.log(
            'To Account:',
            toAccount
        );

        await this.page
            .locator('#fromAccountId')
            .selectOption(fromAccount!);

        await this.page
            .locator('#toAccountId')
            .selectOption(toAccount!);

        await this.page
            .locator('input[value="Transfer"]')
            .click();
    }

    async verifyTransferSuccess() {

        await expect(
            this.page.getByText(
                'Transfer Complete!'
            )
        ).toBeVisible();
    }

    async getSuccessMessage() {

        return await this.page
            .locator('#showResult h1')
            .innerText();
    }
}