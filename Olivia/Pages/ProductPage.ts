import { Page } from '@playwright/test';
import {productLocators} from '../Locators/ProductLocators';

export class ProductPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   async navigateToProductsPage(){
        await this.page.locator(productLocators.productMenu).click();
        return this.page.url();
    }

    async getCountOfProductsOnDisplay(){
        return await this.page.locator(productLocators.productsList).count();
    }

    async getFirstProductTitle(){
        return await this.page.locator(productLocators.productsPageProductTitles).first().textContent();
    }

    async navigateToFirstProductDetailPage(){
        await this.page.locator(productLocators.viewProductButtons).first().click();
    }

    async searchProduct(searchKeyword:string):Promise<void>{
        await this.page.locator(productLocators.searchProductField).pressSequentially(searchKeyword);
        await this.page.locator(productLocators.searchButton).click();
    }

    async scrollToProductList(){
        await this.page.locator(productLocators.firstProductAddToCartButton).scrollIntoViewIfNeeded;
    }

    async navigateToProductSubCategory(){
        await this.page.locator(productLocators.womenCategoryLink).click();
        await this.page.locator(productLocators.topsSubCategoryLink).dblclick();
    }

}