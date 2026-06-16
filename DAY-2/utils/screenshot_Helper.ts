import fs from 'fs';
import path from 'path';
import { Page } from '@playwright/test';

export async function takeScreenshot(
    page: Page,
    folderName: string,
    fileName: string
) {

    const screenshotDir = path.resolve(
        process.cwd(),
        `screenshots/${folderName}`
    );

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(
            screenshotDir,
            { recursive: true }
        );
    }

    const screenshotPath = path.join(
        screenshotDir,
        `${fileName}.png`
    );

    await page.screenshot({
        path: screenshotPath,
        fullPage: true
    });

    console.log(
        'Screenshot saved at:',
        screenshotPath
    );
}