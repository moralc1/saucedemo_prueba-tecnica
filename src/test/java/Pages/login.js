


class Login {
    constructor(page) {
        this.page = page;
        this.usernameField = '#user-name';
        this.passwordField = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = 'h3[data-test="error"]';
       
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async goto(com) {
        
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return await this.page.innerText(this.errorMessage);
    }
}

module.exports = Login;
