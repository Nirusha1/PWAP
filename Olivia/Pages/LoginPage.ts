import { Page } from '@playwright/test';
import {loginLocators} from '../Locators/LoginLocators';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToLoginPage(): Promise<void> {
        await this.page.goto("https://automationexercise.com/login");
    }

    async validLogin(){
        await this.page.locator(loginLocators.emailField).fill("bhintunasayami123@gmail.com");
        await this.page.locator(loginLocators.passwordField).fill("Selenium123");
        await this.page.locator(loginLocators.loginButton). click();
    }
}