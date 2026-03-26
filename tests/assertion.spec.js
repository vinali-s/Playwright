import { test, expect } from '@playwright/test';

test('Assertions demo', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/');
  await page.pause();

  //Assertions
  //check element present or not
  await expect(page.locator ('text=The Kitchen')).toHaveCount(1);

  if(await page.$('text=The Kitchen')) {
    await page.locator('text=The Kitchen').click();
  }

  //Check element Visible/Hidden
await expect(page.locator('text=The Kitchen')).toBeVisible()
// add Soft Assertions by adding 'soft'
await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

//Check element  Enabled/Disabled
await expect(page.locator('text=The Kitchen')).toBeEnabled()
await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

//Check element Text matches value or not
await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

//check Element attribute 
 await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
 await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

 //Check Url of the page
await expect(page).toHaveURL(/kitchen.applitools.com/);

//Check Title of the page
await expect(page).toHaveTitle(/.*Kitchen/);
await page.pause();

//Check Page matches screenshot Visual Validation
await expect(page).toHaveScreenshot();

});