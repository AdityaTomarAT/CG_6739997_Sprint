import fs from 'fs';
import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';

import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir = 'test-results/screenshots/End-to-End';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}

test.describe(
    'Target Account Balance Validation',
    () => {

        test(
            'TC-BAL-02 Validate Target Account Balance',
            async ({ page }) => {

                const loginPage =
                    new LoginPage(page);

                const homePage =
                    new HomePage(page);

                const transferFundsPage =
                    new TransferFundsPage(page);

                await loginPage.navigate();

                await loginPage.login(
                    userData.username,
                    userData.password
                );

                await loginPage.verifyLoginSuccess();

                await homePage.goToTransferFunds();

                const toAccount =
                    await page
                        .locator('#toAccountId option')
                        .nth(1)
                        .getAttribute('value');

                await homePage.goToAccountsOverview();

                await page
                    .getByRole('link', {
                        name: toAccount!
                    })
                    .click();

                const balanceBefore =
                    Number(
                        (
                            await page
                                .locator('#balance')
                                .textContent()
                        )
                            ?.replace('$', '')
                            .replace(',', '')
                    );

                console.log(
                    'Target Balance Before:',
                    balanceBefore
                );

                await homePage.goToTransferFunds();

                await transferFundsPage
                    .transferFunds('100');

                await homePage.goToAccountsOverview();

                await page
                    .getByRole('link', {
                        name: toAccount!
                    })
                    .click();

                const balanceAfter =
                    Number(
                        (
                            await page
                                .locator('#balance')
                                .textContent()
                        )
                            ?.replace('$', '')
                            .replace(',', '')
                    );
                await takeScreenshot(page, 'End-to-End', 'Target-Account-Balance-Validation');
                

                console.log(
                    'Target Balance After:',
                    balanceAfter
                );

                // expect(
                //     balanceAfter -
                //     balanceBefore
                // ).not.toBe("");

            }
        );

    }
);