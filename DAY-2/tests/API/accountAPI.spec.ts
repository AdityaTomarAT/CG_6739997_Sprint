import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import userData from '../../test-data/user-data.json';

import fs from 'fs';
import path from 'path';

test.describe('Accounts API Tests', () => {

  test(
    'TC-API-01 Verify All Accounts After Login',
    async ({ page, request }) => {

      const loginPage =
        new LoginPage(page);

      await loginPage.navigate();

      await loginPage.login(
        userData.username,
        userData.password
      );

      await loginPage.verifyLoginSuccess();

      const accountLinks =
        await page
          .locator('#accountTable a')
          .allTextContents();

      console.log(
        'Accounts Available:',
        accountLinks
      );

      expect(
        accountLinks.length
      ).toBeGreaterThan(0);

      const apiDir = path.resolve(
        process.cwd(),
        'screenshots/api'
      );

      if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(
          apiDir,
          { recursive: true }
        );
      }

      for (const accountId of accountLinks) {

        const response =
          await request.get(
            `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
          );

        expect(
          response.status()
        ).toBe(200);

        const responseBody =
          await response.text();

        console.log(
          `Account ${accountId}:`,
          responseBody
        );

        expect(
          responseBody.length
        ).toBeGreaterThan(0);

        fs.writeFileSync(
          path.join(
            apiDir,
            `Account-${accountId}.xml`
          ),
          responseBody
        );

        console.log(
          `Saved: Account-${accountId}.xml`
        );
      }

    }
  );

});