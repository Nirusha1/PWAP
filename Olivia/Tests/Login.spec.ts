import {test, expect} from '@playwright/test';
import {loginPage} from 'Pages/LoginPage';
import { LoginPage } from '../Pages/LoginPage';


test('Valid Login Test',async({page}) =>{
    //- const browser:Browser = await firefox.launch({headless:false});
    //const page:Page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.validLogin();

    const currentURL = await page.url();
    console.log(currentURL);

    //await page.screenshot({path:'homepage.png'});

    await expect(currentURL).not.toContain("login");    
    


});