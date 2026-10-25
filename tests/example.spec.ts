
import { test, expect } from '@playwright/test';
import 'dotenv/config';
import process from 'node:process';


test('Verify that URL is working', async ({ page }) => {
  await page.goto('https://shoplite-qa.vercel.app/');

  await expect(page).toHaveTitle(/ShopLite/);
  await expect(
    page.getByRole('heading', { name: 'Products' })
  ).toBeVisible();
});

test('Verify login', async ({ page }) => {
  await page.goto('https://shoplite-qa.vercel.app/');

  await page.getByRole('link', { name: 'Login' }).click();

});
test ('Verfiy logged in user',async ({page})=>{
  await page.goto(process.env.URL);
  await page.getByRole('link',{name:'Login'}).click()
  await expect(page.getByRole('heading',{name:'Log in'})).toBeVisible();
  await page.getByRole('textbox',{name:'Email'}).fill(process.env.EMAIL!)
   await page.getByRole('textbox',{name:'Password'}).fill(process.env.PASSWORD!)
   await page.getByRole('button',{name:'Log in'}).click()

   await page.pause()

})

// bob@shop.test     | bob123 
