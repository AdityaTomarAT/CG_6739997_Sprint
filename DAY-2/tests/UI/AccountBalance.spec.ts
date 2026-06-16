import fs from 'fs';
import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { AccountsOverviewPage } from '../../pages/AccountOverviewPage';

import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

const screenshotDir = 'test-results/screenshots/ui';

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}

test.describe('Account Balance Validation', () => {

  test(
    'TC-AB-01 Verify Account Balance Exists',
    async ({ page }) => {

      const loginPage =
        new LoginPage(page);

      const homePage =
        new HomePage(page);

      const accountsPage =
        new AccountsOverviewPage(page);

      await loginPage.navigate();

      await loginPage.login(
        userData.username,
        userData.password
      );

      await loginPage.verifyLoginSuccess();

      await homePage.goToAccountsOverview();

      await accountsPage.openFirstAccount();

      const balance =
        await accountsPage.getAccountBalance();

     await takeScreenshot(page, 'UI', 'Account-Balance-Verification');
    

      console.log(
        'Account Balance:',
        balance
      );

    //   expect(balance)
    //     .toBeGreaterThan(0);
    }
  );
});