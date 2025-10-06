import 'dotenv/config';

export const config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  path: '/wd/hub',
  logLevel: 'info',

  services: [['sauce']],

  framework: 'cucumber',
  specs: ['./features/**/*.feature'],
  cucumberOpts: {
    require: ['./features/step-definitions/**/*.js'],
    timeout: 180000,
    failFast: false
  },

  capabilities: [{
    platformName: 'Android',
    'appium:app': 'storage:filename=Android-MyDemoAppRN.1.3.0.build-244.apk',
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'sauce:options': {
      build: 'appium-cucumber-build',
      name: 'Login Logout Flow',
      deviceOrientation: 'PORTRAIT'
    }
  }],

  reporters: ['dot'],

  mochaOpts: { timeout: 180000 }
};
