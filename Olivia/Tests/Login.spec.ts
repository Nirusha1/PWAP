import {test, expect} from '@playwright/test';


test('Valid Login Test',async({page}) =>{
    //- const browser:Browser = await firefox.launch({headless:false});
    //const page:Page = await browser.newPage();
    await page.goto("https://automationexercise.com/login");

    const emailField= await  page.locator('[name="email"]:nth-child(2)');
    const passwordField= await  page.locator('[name="password"]');
    const loginButton = await page.locator('[data-qa="login-button"]');

    await emailField.fill("bhintunasayami123@gmail.com");
    await passwordField.fill("Selenium123");
    await loginButton.click();

    const currentURL = await page.url();
    console.log(currentURL);

    //await page.screenshot({path:'homepage.png'});

    await expect(currentURL).not.toContain("login");    
    


});