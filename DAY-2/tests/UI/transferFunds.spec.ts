import fs from 'fs';

import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';

import accounts from '../../test-data/accounts.json';
import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir =
    'test-results/screenshots/ui';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, {
        recursive: true
    });
}

test.describe('Transfer Funds Tests', () => {

    test(
        'TC-TF-01 Transfer Funds Between Accounts',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            const homePage =
                new HomePage(page);

            const transferFundsPage =
                new TransferFundsPage(page);

            // Login
            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            // Go to Transfer Funds
            await homePage.goToTransferFunds();

            console.log(
                'Current URL:',
                await page.url()
            );

            // Transfer Funds
            await transferFundsPage.transferFunds(
                userData.amount
            );

            // Verify Success
            await transferFundsPage
                .verifyTransferSuccess();

            // Screenshot
            await takeScreenshot(page, 'UI', 'Transfer-Funds-Success');

            const successMessage =
                await transferFundsPage
                    .getSuccessMessage();
                    

            console.log(
                'Transfer Message:',
                successMessage
            );

            expect(successMessage)
                .toContain(
                    'Transfer Complete!'
                );
        }
    );

});