// pages/cartPage.js

class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = '.checkout_button';  // Selector para el botón de checkout
    }

    // Ir al proceso de checkout
    async checkout() {
        await this.page.click(this.checkoutButton);  // Hacer clic en el botón de checkout
    }
}

module.exports = CartPage;
