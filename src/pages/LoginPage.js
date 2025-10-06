class LoginPage {
  get usernameField() { return $('~Username input field'); }
  get passwordField() { return $('~Password input field'); }
  get loginBtn() { return $('~Login button'); }

  async login(user, pass) {
    await this.usernameField.waitForDisplayed({ timeout: 10000 });
    await this.usernameField.setValue(user);
    await this.passwordField.setValue(pass);
    await this.loginBtn.click();
  }
}
export default new LoginPage();
