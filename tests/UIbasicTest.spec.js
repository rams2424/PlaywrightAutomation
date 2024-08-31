const {test,expect} = require('@playwright/test')

test('First Playwright test', async ({page})=>
{
    // const context = await browser.newContext();
    // const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/");

});

test('page playwright test', async ({page})=>
{
    await page.goto("https://sso.teachable.com/secure/9521/identity/login/password");
    //get the title -- Assertion
   console.log(await page.title());
  await expect(page).toHaveTitle("Google")

})