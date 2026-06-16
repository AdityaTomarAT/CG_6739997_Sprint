import fs from 'fs';
import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { AccountsOverviewPage } from '../../pages/AccountOverviewPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';

import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir = 'test-results/screenshots/End-to-End';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}

test.describe(
    'Transfer Validation Workflow',
    () => {

        test(
            'TC-E2E-02 Validate Transfer and Balance Update',
            async ({ page }) => {

                const loginPage =
                    new LoginPage(page);

                const homePage =
                    new HomePage(page);

                const accountsPage =
                    new AccountsOverviewPage(page);

                const transferFundsPage =
                    new TransferFundsPage(page);

                await loginPage.navigate();

                await loginPage.login(
                    userData.username,
                    userData.password
                );

                await loginPage.verifyLoginSuccess();

                await homePage.goToAccountsOverview();

                const accountNumber =
                    await accountsPage
                        .getFirstAccountNumber();

                console.log(
                    'Account Number:',
                    accountNumber
                );

                await accountsPage
                    .openFirstAccount();

                const balanceBefore =
                    await accountsPage
                        .getAccountBalance();

                console.log(
                    'Balance Before:',
                    balanceBefore
                );

                await homePage
                    .goToTransferFunds();

                await transferFundsPage
                    .transferFunds('100');

                await transferFundsPage
                    .verifyTransferSuccess();

                await homePage
                    .goToAccountsOverview();

                await page
                    .getByRole('link', {
                        name: accountNumber
                    })
                    .click();

                const balanceAfter =
                    await accountsPage
                        .getAccountBalance();
                    
                await takeScreenshot(page, 'End-to-End', 'Balance-After-Transfer');

                console.log(
                    'Balance After:',
                    balanceAfter
                );

                expect(
                    balanceAfter
                ).toBeLessThan(
                    balanceBefore
                );

                expect(
                    balanceBefore -
                    balanceAfter
                ).toBe(100);

            }
        );

    }
);