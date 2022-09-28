 //import { Builder } from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome';

require('chromedriver');

const { Builder, webdriver } = require('selenium-webdriver');
//const Builder = require('selenium-webdriver');
//const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async () => {
 
  const options = new chrome.Options()
 	.headless()
 	.windowSize({ width: 1280, height: 720 });
 	
//  const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
  const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();
 
  await driver.get('https://example.com');

  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, 'base64');
  fs.writeFileSync('./screenshot.jpg', buffer);


  await driver.quit();

})();

