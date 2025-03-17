// pages/inventoryPage.js

class Inventory {
    constructor(page) {
        this.page = page;
        this.firstProductAddToCart = '.btn_inventory'; // Selector para el botón "Añadir al carrito" del primer producto
        this.cartIcon = '.shopping_cart_link';  // Icono del carrito
    }

    // Añadir el primer producto al carrito
    async addFirstProductToCart() {
        await this.page.click(this.firstProductAddToCart);  // Hacer clic en "Añadir al carrito"
    }

    // Ir al carrito
    async goToCart() {
        await this.page.click(this.cartIcon);  // Hacer clic en el icono del carrito
    }
}

module.exports = Inventory;
