const { test, expect } = require('@playwright/test');
const Login = require("../Pages/login");
const Inventory = require('../pages/inventory');
const CartPage = require('../pages/cartPage');



test.describe('Technical Test Swag Labs', () => {
    let login;
    let inventory;
    let cartPage;

    test.beforeEach(async ({ page }) => {

        // Code for the login page before each test @morales

        login = new Login(page);
        inventory = new Inventory(page);
        cartPage = new CartPage(page);
        await login.navigate();

    });


    test('CP1 Login with valid credentials',   async ({ page }) => {
        await login.login('standard_user', 'secret_sauce');

        // Make sure the URL changes to the dashboard after logging in. @Morales

        await expect(await page.getByText("Products")).toBeVisible();

    });

    test('CP2 Login with invalid credentials', async () => {
        await login.login('Morales', 'No_me_acuerdo');

        // Verify that the error message is visible @Morales

        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });


    test('CP3 Validate shopping cart',   async ({ page }) => {
        await login.login('standard_user', 'secret_sauce');

        await inventory.addFirstProductToCart();
        await inventory.goToCart();
        const cartItemCount = await page.locator('.cart_quantity').innerText();
        expect(Number(cartItemCount)).toBeGreaterThan(0);
        await cartPage.checkout();

        //Verify that we are on the checkout page @Morales
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    });

    test('CP4 Validate maximum number of characters in login', async () => {
        await login.login('347347834783478347jdfhjdhfshfjdhf--.........++++++++++*********************************************************************', 'No_me_acuerdo');

        // Verify that the error message is visible @Morales

        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});
