import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ProductPage } from '../Pages/ProductPage';
import { productLocators } from '../Locators/ProductLocators';

test('Verify Products List and Details',async({page}) =>{
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    //Login
    await loginPage.goToLoginPage();
    await loginPage.validLogin();

    //await page.screenshot({path:'homepage.png'});
    await productPage.navigateToProductsPage();
    const currentURL = await page.url();
    await expect(currentURL).toContain("products"); 

    //Product List is displayed successfully
    const numberOfProducts = await productPage.getCountOfProductsOnDisplay();
    await expect(numberOfProducts).toBeGreaterThan(0);

    const expectedProductTitle = await productPage.getFirstProductTitle();
    console.log(expectedProductTitle);

    await productPage.navigateToFirstProductDetailPage();
    await expect(page.url()).toContain("details");
    const actualTitle= await page.locator(productLocators.productsDetailsTitle).textContent();
    const actualCategory=await page.locator(productLocators.productsDetailsProductInformations).first().textContent();
    const actualAvailability=await page.locator(productLocators.productsDetailsProductInformations).nth(1).textContent();
    const actualCondition = await page.locator(productLocators.productsDetailsProductInformations).nth(2).textContent();
    const actualBrand= await page.locator(productLocators.productsDetailsProductInformations).nth(3).textContent();
    const actualPrice= await page.locator(productLocators.productsDetailsProductsPrice).textContent();

    await expect(actualTitle).toContain(expectedProductTitle);
    await expect(actualCategory).toContain("Category");
    await expect(actualAvailability).toContain("Availability");
    await expect(actualCondition).toContain("Condition");
    await expect(actualBrand).toContain("Brand");
    await expect(actualPrice).toContain("Rs.");

});