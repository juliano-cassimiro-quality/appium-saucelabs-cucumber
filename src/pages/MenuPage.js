class MenuPage {
  get menuBtn() { return $('~open menu'); }
  get loginItem() { return $('~menu item log in'); }
  get logoutItem() { return $('~menu item log out'); }

  async openMenu() {
    await this.menuBtn.waitForDisplayed({ timeout: 10000 });
    await this.menuBtn.click();
  }

  async goToLogin() {
    await this.loginItem.waitForDisplayed({ timeout: 8000 });
    await this.loginItem.click();
  }

  async validateLogoutVisible() {
    await this.logoutItem.waitForDisplayed({ timeout: 10000 });
  }

  async logout() {
    if (await this.logoutItem.isDisplayed()) {
      await this.logoutItem.click();
    }
  }
}
export default new MenuPage();
