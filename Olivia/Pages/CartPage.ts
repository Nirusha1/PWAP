import { Page } from '@playwright/test';
import {cartLocators} from '../Locators/CartLocators';

interface ProductDetails {
  productTitle: string;
  productPrice: string;
}

export class CartPage{
    private page : Page;

    constructor (page:Page){
        this.page=page;
    }

     async navigateToCartsPage(){
        await this.page.locator(cartLocators.cartMenu).click();
    }

    async getProductDetailsForCart(i:number):Promise<ProductDetails>{

          const productDetailsForProductOnCart:ProductDetails = {
                productTitle: await this.page.locator(cartLocators.productTitlesOnCart).nth(i).innerText(),
                productPrice: await this.page.locator(cartLocators.productPricesOnCart).nth(i).innerText()
            };
            return productDetailsForProductOnCart;
       }

    async deleteProductFromCart(){
        await this.page.locator(cartLocators.productDeleteButtons).nth(0).click();
        await this.page.locator(cartLocators.productDeleteButtons).nth(1).click();
    }

    async getTextFromEmptyCartSpan(){
        return await this.page.locator(cartLocators.emptyCartSpan).innerText();
    }



}