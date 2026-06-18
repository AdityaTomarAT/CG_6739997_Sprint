import fs from 'fs';

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';
import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir = 'test-results/screenshots/ui';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}

test.describe('Account Creation Tests', () => {

    test('TC-AC-UI-01 Create Savings Account', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const openAccountPage = new OpenAccountPage(page);

        // Login
        await loginPage.navigate();

        await loginPage.login(
            userData.username,
            userData.password
        );

        await loginPage.verifyLoginSuccess();

        // Open New Account
        await homePage.goToOpenAccount();

        // Create Savings Account
        await openAccountPage.createSavingsAccount();

        // Verify Account Creation
        await openAccountPage.verifyAccountCreated();

        // Validate Account ID
        const savingsAccountId =
            await openAccountPage.getCreatedAccountId();

        await takeScreenshot(page, 'UI', 'Savings-Account-Created');


        console.log(
            'Savings Account ID:',
            savingsAccountId
        );

        fs.writeFileSync(
            'test-data/accounts.json',
            JSON.stringify(
                {
                    savingsAccountId:
                        savingsAccountId,
                    checkingAccountId: ''
                },
                null,
                2
            )
        );

        expect(savingsAccountId)
            .not.toBe('');
    });

    test('TC-AC-UI-02 Create Checking Account', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const openAccountPage = new OpenAccountPage(page);

        // Login
        await loginPage.navigate();

        await loginPage.login(
            userData.username,
            userData.password
        );

        await loginPage.verifyLoginSuccess();

        // Open New Account
        await homePage.goToOpenAccount();

        // Create Checking Account
        await openAccountPage.createCheckingAccount();

        // Verify Account Creation
        await openAccountPage.verifyAccountCreated();

        console.log(
            await page.locator('#openAccountResult').innerHTML()
        );

        // Screenshot
        // await page.screenshot({
        //     path: `${screenshotDir}/TC-AC-02-Checking-Account-Created.png`,
        //     fullPage: true
        // });

        // Validate Account ID
        const checkingAccountId =
            await openAccountPage.getCreatedAccountId();

        await takeScreenshot(page, 'UI', 'Checking-Account-Created');

        console.log(
            'Checking Account ID:',
            checkingAccountId
        );

        const existingData =
            JSON.parse(
                fs.readFileSync(
                    'test-data/accounts.json',
                    'utf-8'
                )
            );

        existingData.checkingAccountId =
            checkingAccountId;

        fs.writeFileSync(
            'test-data/accounts.json',
            JSON.stringify(
                existingData,
                null,
                2
            )
        );

        expect(checkingAccountId)
            .not.toBe('');
    });

});