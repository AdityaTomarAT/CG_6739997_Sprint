import fs from 'fs';

import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';

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

test.describe(
    'Transfer Same Account Test',
    () => {

        test(
            'TC-NEG-03 Transfer To Same Account',
            async ({ page }) => {

                const loginPage =
                    new LoginPage(page);

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

                const sameAccount =
                    await page
                        .locator(
                            '#fromAccountId option'
                        )
                        .first()
                        .getAttribute('value');

                await page
                    .locator('#amount')
                    .fill('100');

                await page
                    .locator('#fromAccountId')
                    .selectOption(
                        sameAccount!
                    );

                await page
                    .locator('#toAccountId')
                    .selectOption(
                        sameAccount!
                    );

                await page
                    .locator(
                        'input[value="Transfer"]'
                    )
                    .click();

                await takeScreenshot(page, 'UI', 'Transfer-Same-Account');

            }
        );

    }
);