import fs from 'fs';
import { test, expect, request } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage';
import { HomePage } from '../../pages/HomePage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';
import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir = 'test-results/screenshots/End-to-End';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}


test.describe(
    'Register Login Create Account Workflow',
    () => {

        test.skip(
            'TC-E2E-01 Register Login Create Savings Account',
            async ({ page, request }) => {

                const loginPage =
                    new LoginPage(page);

                const registerPage =
                    new RegisterPage(page);

                const homePage =
                    new HomePage(page);

                const openAccountPage =
                    new OpenAccountPage(page);

                const username =
                    userData.username;

                const password =
                    userData.password;

                // Register User
                await loginPage.navigate();

                await loginPage.navigate();

                await registerPage.registerUser(
                    'Aditya',
                    'Tomar',
                    'Jaipur',
                    'Rajasthan',
                    '302001',
                    '9999999999',
                    '123456789', '123456',
                    username,
                    password,
                );

                await registerPage
                    .verifyRegistrationSuccess();

                console.log(
                    'Registered User:',
                    username
                );

                await homePage
                    .goToOpenAccount();

                await openAccountPage
                    .createSavingsAccount();

                const SavingsaccountId =
                    await openAccountPage
                        .verifyAccountCreated();

                const savingResponse =
                    await request.get(
                        `https://parabank.parasoft.com/parabank/services/bank/accounts/${SavingsaccountId}`
                    );

                expect(
                    savingResponse.status()
                ).toBe(200);

                const savingsResponseBody =
                    await savingResponse.text();

                expect(
                    savingsResponseBody         
                ).toContain(
                    `<id>${SavingsaccountId}</id>`
                );

                expect(
                    savingsResponseBody
                ).toContain(
                    '<type>SAVINGS</type>'
                );

                expect(
                    savingsResponseBody
                ).toContain(
                    '<balance>'
                );



                await homePage
                    .goToOpenAccount();

                await openAccountPage.createCheckingAccount();

                const CheckingaccountId =
                    await openAccountPage
                        .verifyAccountCreated();

                const checkingResponse =
                    await request.get(
                        `https://parabank.parasoft.com/parabank/services/bank/accounts/${CheckingaccountId}`
                    );

                expect(
                    checkingResponse.status()
                ).toBe(200);

                const checkingResponseBody =
                    await checkingResponse.text();

                expect(
                    checkingResponseBody
                ).toContain(
                    `<id>${CheckingaccountId}</id>`
                );

                expect(
                    checkingResponseBody
                ).toContain(
                    '<type>SAVINGS</type>'
                );

                expect(
                    checkingResponseBody
                ).toContain(
                    '<balance>'
                );

                await takeScreenshot(page, 'End-to-End', 'Register-Login-Create-Account');

            }
        );

    }
);