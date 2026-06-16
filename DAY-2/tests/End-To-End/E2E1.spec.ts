import fs from 'fs';
import { test, expect } from '@playwright/test';

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
            async ({ page }) => {

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

                await loginPage.goToRegisterPage();

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

                // Login
                // await loginPage.navigate();

                // await loginPage.login(
                //     username,
                //     password
                // );

                // await loginPage
                //     .verifyLoginSuccess();

                // console.log(
                //     'Login Successful'
                // );

                // Create Savings Account
                await homePage
                    .goToOpenAccount();

                await openAccountPage
                    .createSavingsAccount();

                await openAccountPage
                    .verifyAccountCreated();

                await homePage
                    .goToOpenAccount();

                await openAccountPage.createCheckingAccount();

                await openAccountPage
                    .verifyAccountCreated();

                await takeScreenshot(page, 'End-to-End', 'Register-Login-Create-Account');

            }
        );

    }
);