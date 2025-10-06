import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../../src/pages/HomePage.js';
import MenuPage from '../../src/pages/MenuPage.js';
import LoginPage from '../../src/pages/LoginPage.js';

Given('o app está aberto', async () => {
  await HomePage.waitForAppToLoad();
});

When('eu abro o menu lateral', async () => {
  await MenuPage.openMenu();
});

When('eu navego até a tela de login', async () => {
  await MenuPage.goToLogin();
});

When('eu informo as credenciais válidas', async () => {
  await LoginPage.login('bob@example.com', '10203040');
});

Then('devo ver o botão de logout disponível', async () => {
  await MenuPage.openMenu();
  await MenuPage.validateLogoutVisible();
});

Then('eu realizo o logout', async () => {
  await MenuPage.logout();
  await driver.execute('sauce:job-result=passed');
});
