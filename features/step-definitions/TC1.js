const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

// SETUP FIREFOX DRIVER 
// const firefox = require('geckodriver');
// const {By, Builder} = require('selenium-webdriver');
// let driver = new Builder()
//          .forBrowser('firefox')
//          .build();


Given('I visit publicazo homepage', {timeout: 15 * 1000}, async () => {    
    
    await driver.get("http://publicazo.insprak.com/")
    await driver.manage().window().setRect({ width: 1266, height: 656 })
    
    
          });

When('I search for teste', async () => {
    await driver.findElement(By.id("search")).click()
    await driver.findElement(By.id("search")).sendKeys("teste")
    await driver.findElement(By.name("commit")).click()

          });

Then('I should see the results', async () => {
    
    await driver.findElement(By.css(".col-md-4:nth-child(3) .panel-body")).click()
    assert(await driver.findElement(By.linkText("Aulas de Teste de Software1")).getText() == "Aulas de Teste de Software")
    await driver.close();
    //===============

    await driver.quit();
    
          });
