import fs from 'fs';
import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';

import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir = 'test-results/screenshots/End-to-End';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}


test.describe('Account Validation Workflow', () => {

    test(
        'TC-E2E-01 Create Account and Validate Through API',
        async ({ page, request }) => {

            const loginPage =
                new LoginPage(page);

            const homePage =
                new HomePage(page);

            const openAccountPage =
                new OpenAccountPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await homePage.goToOpenAccount();

            await openAccountPage.createSavingsAccount();

            await openAccountPage.verifyAccountCreated();

            await page.waitForTimeout(3000);

            const accountId =
                await openAccountPage.getCreatedAccountId();

            console.log(
                'Created Account ID:',
                accountId
            );

            expect(accountId)
                .not.toBe('');

            const response =
                await request.get(
                    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
                );

            expect(
                response.status()
            ).toBe(200);

            const responseBody =
                await response.text();

            await takeScreenshot(page, 'End-to-End', 'Account-Validation');


            console.log(
                'API Response:',
                responseBody
            );

            expect(
                responseBody
            ).toContain(
                `<id>${accountId}</id>`
            );

            expect(
                responseBody
            ).toContain(
                '<type>SAVINGS</type>'
            );

            expect(
                responseBody
            ).toContain(
                '<balance>'
            );

            console.log(
                'Account validated successfully through API'
            );

        }
    );

});