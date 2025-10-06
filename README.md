# Appium + WebdriverIO + Cucumber + Page Objects (Sauce Labs / Android)

## Setup
1. Edite `.env` com suas credenciais do Sauce Labs.
2. `npm install`
3. (Opcional) Envie o APK para o storage do Sauce:
   curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -X POST "https://api.us-west-1.saucelabs.com/v1/storage/upload" -F "payload=@Android-MyDemoAppRN.1.3.0.build-244.apk" -F "name=Android-MyDemoAppRN.1.3.0.build-244.apk"
4. `npx wdio run wdio.conf.js`
