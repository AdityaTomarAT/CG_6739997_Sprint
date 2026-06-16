import { Page } from '@playwright/test';

export class AccountsOverviewPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getFirstAccountNumber() {

        const accountNumber =
            await this.page
                .locator('#accountTable a')
                .first()
                .textContent();

        return accountNumber?.trim() || '';
    }

    async openFirstAccount() {

        await this.page
            .locator('#accountTable a')
            .first()
            .click();
    }

    async getAccountBalance() {

        const balance =
            await this.page
                .locator('#balance')
                .textContent();

        return Number(
            balance
                ?.replace('$', '')
                .replace(',', '')
                .trim()
        );
    }
}