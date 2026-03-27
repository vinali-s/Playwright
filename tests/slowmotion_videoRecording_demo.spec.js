import { test, expect, chromium } from '@playwright/test';

test('slow motion video recording demo test', async () => {
// Launch browser
const browser = await chromium.launch({
    headless: false,
    slowMo: 1000
});

// Create a new incognito browser context
const context = await browser.newContext({
    recordVideo: {
       dir: 'videos/',
       size: {width:800, height: 600}
   }
});

// Create a new page inside context.
const page = await context.newPage();
await page.goto('https://www.saucedemo.com/');

  //click on username and password fields, fill them and click on login button
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();

// Dispose context once it's no longer needed.
await context.close();
});