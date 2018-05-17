/*
 working with lastest WebDriver API

https: //stackoverflow.com/questions/42827413/running-node-js-selenium-test-case-on-chrome-get-error-error-econnrefused-conne
https: //stackoverflow.com/questions/22426273/chromeoptions-causes-reference-error-using-selenium-chromedriver-for-node-js
https: //stackoverflow.com/questions/44197253/headless-automation-with-nodejs-selenium-webdriver
http: //seleniumhq.github.io/selenium/docs/api/javascript/index.html
https: //marmelab.com/blog/2016/04/19/e2e-testing-with-node-and-es6.html
https: //www.sitepoint.com/how-to-test-your-javascript-with-selenium-webdriver-and-mocha/
https: //github.com/SeleniumHQ/selenium/wiki/WebDriverJs


*/

const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const By = require('selenium-webdriver').By;
const until = require('selenium-webdriver').until;
const assert = require('assert')

/** 
 * Set chrome command line options/switches
 */
let chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--js-flags=--expose-gc");
chromeOptions.addArguments("--enable-precise-memory-info");
chromeOptions.addArguments("--disable-popup-blocking");
chromeOptions.addArguments("--disable-default-apps");
chromeOptions.addArguments("--disable-infobars");
chromeOptions.addArguments("chorme.switches", "--disable-extensions");

let path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
//let driver = chrome.Driver.createSession(chromeOptions, new chrome.ServiceBuilder(path).build());
let driver = new WebDriver.Builder().forBrowser('chrome').withCapabilities(WebDriver.Capabilities.chrome()).setChromeOptions(chromeOptions).build();
//let driver = new WebDriver.Builder().forBrowser('firefox').build();
driver.manage().deleteAllCookies();
//driver.get("http://www.google.com");
const newLocal = driver.get('http://www.google.com/ncr')
  .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver', WebDriver.Key.RETURN))
  .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 6000))
  .then(_ => driver.quit(), e => driver.quit().then(() => {
    throw e;
  }));
// let searchBox = driver.findElement(By.name('q'));
// searchBox.sendKeys('simple programmer');
// searchBox.sendKeys(WebDriver.Key.ENTER)
// searchBox.getAttribute('value').then(function (value) {
//   assert.equal(value,'simple programmer')
// });
// driver.sleep(8000);
// driver.findElement(By.name('q')).sendKeys('simple programmer');
// driver.findElement(By.name('q')).sendKeys(WebDriver.Key.ENTER)
// driver.findElement(By.name('btnG')).click();
// driver.findElement(By.name('q')).getAttribute('value').then(function (value) {
//   assert.equal(value,'simple programmer')
//  });
// //driver.wait(until.titleIs('Webdriver - Google Search'),8000);
// driver.sleep(8000);
//driver.quit();




