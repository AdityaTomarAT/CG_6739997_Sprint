import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { AccountsOverviewPage } from '../../pages/AccountOverviewPage';

import { saveApiResponse } from '../../utils/saveApiResponse';

import userData from '../../test-data/user-data.json';

test.describe('API Validation Tests', () => {

    test(
        'TC-API-02 Validate Status Code',
        async ({ page, request }) => {

            const loginPage =
                new LoginPage(page);

            const accountsPage =
                new AccountsOverviewPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Accounts Overview'
                })
                .click();

            const accountId =
                await accountsPage
                    .getFirstAccountNumber();

            const response =
                await request.get(
                    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
                );

            console.log(
                'Status Code:',
                response.status()
            );

            expect(
                response.status()
            ).toBe(200);

        }
    );

    test(
        'TC-API-03 Validate Response Time',
        async ({ page, request }) => {

            const loginPage =
                new LoginPage(page);

            const accountsPage =
                new AccountsOverviewPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Accounts Overview'
                })
                .click();

            const accountId =
                await accountsPage
                    .getFirstAccountNumber();

            const startTime =
                Date.now();

            await request.get(
                `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
            );

            const endTime =
                Date.now();

            const responseTime =
                endTime - startTime;

            console.log(
                'Response Time:',
                responseTime,
                'ms'
            );

            expect(
                responseTime
            ).toBeLessThan(2000);

        }
    );

    test(
        'TC-API-04 Validate Response Data',
        async ({ page, request }) => {

            const loginPage =
                new LoginPage(page);

            const accountsPage =
                new AccountsOverviewPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Accounts Overview'
                })
                .click();

            const accountId =
                await accountsPage
                    .getFirstAccountNumber();

            const response =
                await request.get(
                    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
                );

            const responseBody =
                await response.text();

            console.log(
                'API Response:',
                responseBody
            );

            saveApiResponse(
                `TC-API-03-${accountId}`,
                responseBody
            );

            expect(
                responseBody
            ).toContain('<id>');

            expect(
                responseBody
            ).toContain('<type>');

            expect(
                responseBody
            ).toContain('<balance>');

            expect(
                responseBody
            ).toContain(accountId);

        }
    );

    test(
        'TC-API-05 Validate Balance Data Type',
        async ({ page, request }) => {

            const loginPage =
                new LoginPage(page);

            const accountsPage =
                new AccountsOverviewPage(page);

            await loginPage.navigate();

            await loginPage.login(
                userData.username,
                userData.password
            );

            await loginPage.verifyLoginSuccess();

            await page
                .getByRole('link', {
                    name: 'Accounts Overview'
                })
                .click();

            const accountId =
                await accountsPage
                    .getFirstAccountNumber();

            const response =
                await request.get(
                    `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
                );

            const responseBody =
                await response.text();

            saveApiResponse(
                `TC-API-04-${accountId}`,
                responseBody
            );

            const balanceMatch =
                responseBody.match(
                    /<balance>(.*?)<\/balance>/
                );

            const balance =
                Number(
                    balanceMatch?.[1]
                );

            console.log(
                'Balance:',
                balance
            );

        }
    );

});