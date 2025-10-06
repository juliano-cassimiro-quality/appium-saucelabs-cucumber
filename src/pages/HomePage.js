class HomePage {
  async waitForAppToLoad() {
    await driver.pause(5000);
  }
}
export default new HomePage();
