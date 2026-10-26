import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

When('I open the login page', async ({ page }) => {
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();
});

When('I log in with valid credentials', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.EMAIL!);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Log in' }).click();
});

Then('I should be logged in', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Login' })).toBeHidden();
});
