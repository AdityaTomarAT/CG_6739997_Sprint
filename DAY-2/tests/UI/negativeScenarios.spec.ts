import fs from 'fs';

import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { TransferFundsPage } from '../../pages/TransferFundsPage';

import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir =
    'test-results/screenshots/negative-tests';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(
        screenshotDir,
        { recursive: true }
    );
}

test.describe('Negative Scenarios', () => {

    test(
        'TC-NEG-01 Invalid Username Login',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            await loginPage.navigate();

            await loginPage.login(
                'wronguser',
                userData.password
            );

            await takeScreenshot(page, 'Negative', 'Invalid-Username-Login');
        }
    );

    test(
        'TC-NEG-02 Invalid Password Login',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                'wrongpassword'
            );

            await takeScreenshot(page, 'Negative', 'Invalid-Password-Login');
        }
    );

    test(
        'TC-NEG-03 Empty Username',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            await loginPage.navigate();

            await loginPage.login(
                '',
                userData.password
            );

            await takeScreenshot(page, 'Negative', 'Empty-Username-Login');
        }
    );

    test(
        'TC-NEG-04 Empty Password',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                ''
            );

            await takeScreenshot(page, 'Negative', 'Empty-Password-Login');
        }
    );

    test(
        'TC-NEG-05 Empty Username And Password',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            await loginPage.navigate();

            await loginPage.login(
                '',
                ''
            );

            await takeScreenshot(page, 'Negative', 'Empty-Username-And-Password');
        }
    );

    test(
        'TC-NEG-06 Empty Transfer Amount',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            const transferFundsPage =
                new TransferFundsPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Transfer Funds'
                })
                .click();

            await transferFundsPage.transferFunds('');

            await takeScreenshot(page, 'Negative', 'Empty-Transfer-Amount');
        }
    );

    test(
        'TC-NEG-07 Negative Transfer Amount',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            const transferFundsPage =
                new TransferFundsPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Transfer Funds'
                })
                .click();

            await transferFundsPage.transferFunds(
                '-100'
            );

            await takeScreenshot(page, 'Negative', 'Negative-Transfer-Amount');
        }
    );

    test(
        'TC-NEG-08 Alphabetic Transfer Amount',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            const transferFundsPage =
                new TransferFundsPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Transfer Funds'
                })
                .click();

            await transferFundsPage.transferFunds(
                'abc'
            );

            await takeScreenshot(page, 'Negative', 'Alphabetic-Transfer-Amount');
        }
    );

    test(
        'TC-NEG-09 Special Characters Transfer Amount',
        async ({ page }) => {

            const loginPage =
                new LoginPage(page);

            const transferFundsPage =
                new TransferFundsPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Transfer Funds'
                })
                .click();

            await transferFundsPage.transferFunds(
                '@#$%'
            );

            await takeScreenshot(page, 'Negative', 'Special-Characters-Transfer-Amount');
        }
    );

});