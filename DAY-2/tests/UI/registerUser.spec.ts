import { test } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import userData from '../../test-data/user-data.json';
import { takeScreenshot } from '../../utils/screenshot_Helper';

// const screenshotDir = 'screenshots';
const screenshotDir = 'test-results/screenshots/ui';


test('TC-REG-UI-01 Register New User', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    await registerPage.navigate();

    await registerPage.registerUser(
        userData.firstName,
        userData.lastName,
        userData.address,
        userData.city,
        userData.state,
        userData.zipCode,
        userData.phone,
        userData.ssn,
        userData.username,
        userData.password
    );

    await registerPage.verifyRegistrationSuccess();
    await takeScreenshot(page, 'UI', 'Register-New-User');

});