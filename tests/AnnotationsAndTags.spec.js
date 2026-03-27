import { test } from '@playwright/test';

test.skip('skip this test', async ({ page }) => {
   // This test will be skipped
 });

//will show error if the test does not fail
test('not yet ready', async ({ page }) => {
   test.fail();
 });

//test will be aborted
test.fixme('test to be fixed', async ({ page }) => {
 });

//marks the test as slow and triples the test timeout
test('slow test', async ({ page }) => {
   test.slow();
 });

//runs specific tests
test.only('focus this test', async ({ page }) => {
   // Run only focused tests in the entire project
 });

 test('Test full report @smoke', async ({ page }) => {
   // ...
 });

//npx playwright test --grep “@smoke”

//Opposite of grep  Skip tests with certain tag
//npx playwright test --grep-invert “@smoke”