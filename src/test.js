require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const driver = new Builder().forBrowser('chrome').build()

const keyword = 'テスト'
driver
  .get('https://www.google.com/search')
  .then(() =>
    driver.findElement(By.name('q')).sendKeys(keyword, Key.RETURN)
  )
  .then(() => 
    driver.wait(until.titleContains(keyword), 1000)
  )
  .then(() => driver.quit())

