import { Page } from '@playwright/test';
import {productLocators} from '../Locators/ProductLocators';

interface ProductDetail {
  productTitle: string;
  productPrice: string;
}


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

    async getProductDetail(i: number): Promise<ProductDetail> {
  const productTitle = await this.page
    .locator(productLocators.productInfoTitles)
    .nth(i)
    .innerText();

  const productPrice = await this.page
    .locator(productLocators.productInfoPrices)
    .nth(i)
    .innerText();

  return {
    productTitle,
    productPrice
  };

}

async addFirstProductToCart(): Promise<void> {
    await this.page.locator(productLocators.firstProductAddToCartButton).click();
  }

  async addSecondProductToCart(): Promise<void> {
    await this.page.locator(productLocators.secondProductAddToCartButton).click();
  }

  async getProductAddedToCartSuccessMessage(): Promise<string> {
    return this.page.locator(productLocators.productAddedToCartSuccessMessage).innerText();
  }

  async clickContinueShoppingButton(): Promise<void> {
    await this.page.locator(productLocators.continueShoppingButton).click();
  }
}