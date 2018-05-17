/*

Not working with lastest WebDriver API

*/

const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const By = require('selenium-webdriver').By;
const until = require('selenium-webdriver').until;

// Open Firefox

var options = new chrome.Options();
options.addArguments("chorme.switches", "--disable-extensions");
options.addArguments('start-maximized');
options.addArguments('test-type');
let driver = new WebDriver.Builder().forBrowser('chrome').withCapabilities(options.toCapabilities).build();


//maximize the window
driver.manage().window().maximize();

//navigate to Dayforce.com / google.com

driver.get('http://www.google.com')

//driver.quit();
