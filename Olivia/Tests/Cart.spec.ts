import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ProductPage } from '../Pages/ProductPage';
import { cartLocators } from '../Locators/CartLocators';
import { CartPage } from '../Pages/CartPage';

test('Verify Cart Navigation and Cart product details',async({page}) =>{

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    //Login
    await loginPage.goToLoginPage();
    await loginPage.validLogin();

    await productPage.navigateToProductsPage();
     const firstProductDetail = await productPage.getProductDetail(0);
     const secondProductDetail = await productPage.getProductDetail(1);
     console.log(firstProductDetail);
     console.log(secondProductDetail);

    await productPage.scrollToProductList();    
    await productPage.addFirstProductToCart();

    const successMessage = await productPage.getProductAddedToCartSuccessMessage();
    expect(successMessage).toBe("Your product has been added to cart.");

    await productPage.clickContinueShoppingButton();
    await productPage.addSecondProductToCart();
    expect(await productPage.getProductAddedToCartSuccessMessage()).toBe('Your product has been added to cart.');

    await productPage.clickContinueShoppingButton();
    await cartPage.navigateToCartsPage();

    const firstProductDetailOnCart = await cartPage.getProductDetailsForCart(0);
    const secondProductDetailOnCart = await cartPage.getProductDetailsForCart(1);
    expect(firstProductDetailOnCart).toEqual(firstProductDetail);
    expect(secondProductDetailOnCart).toEqual(secondProductDetail);

    await cartPage.deleteProductFromCart();
    const emptyCartSpanText = await cartPage.getTextFromEmptyCartSpan();
    expect(emptyCartSpanText).toBe("Cart is empty!");


});
