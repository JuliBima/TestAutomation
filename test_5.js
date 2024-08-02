const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
    let options = new chrome.Options();
    options.addArguments("--start-maximized");

    // Config Chrome
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://www.saucedemo.com/');

        let username = await driver.wait(until.elementLocated(By.xpath("//input[@id='user-name']")), 10000);
        await driver.wait(until.elementIsVisible(username), 1000);
        await username.sendKeys('standard_user');
        await driver.sleep(1000);

        let password = await driver.wait(until.elementLocated(By.xpath("//input[@id='password']")), 10000);
        await driver.wait(until.elementIsVisible(password), 1000);
        await password.sendKeys('secret_sauce');
        await driver.sleep(1000);

        let login  = await driver.wait(until.elementLocated(By.xpath("//input[@id='login-button']")),1000)
        await login.click();

        await driver.sleep(1000);

        let addcart  = await driver.wait(until.elementLocated(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']")),1000)
        await addcart.click();
        await driver.sleep(1000);

        let klikaddcart  = await driver.wait(until.elementLocated(By.xpath("//div[@id='shopping_cart_container']")),1000)
        await klikaddcart.click();
        await driver.sleep(1000);

        let checkout  = await driver.wait(until.elementLocated(By.xpath("//button[@id='checkout']")),1000)
        await checkout.click();
        await driver.sleep(1000);

        let fristName = await driver.wait(until.elementLocated(By.xpath("//input[@id='first-name']")), 10000);
        await driver.wait(until.elementIsVisible(fristName), 1000);
        await fristName.sendKeys('Juli');
        await driver.sleep(1000);

        let lastName = await driver.wait(until.elementLocated(By.xpath("//input[@id='last-name']")), 10000);
        await driver.wait(until.elementIsVisible(lastName), 1000);
        await lastName.sendKeys('Bima');
        await driver.sleep(1000);

        let postalCode = await driver.wait(until.elementLocated(By.xpath("//input[@id='postal-code']")), 10000);
        await driver.wait(until.elementIsVisible(postalCode), 1000);
        await postalCode.sendKeys('16283');
        await driver.sleep(1000);

        await driver.executeScript("window.scrollBy(0, document.body.scrollHeight * 0.2);");
        
        let continue2  = await driver.wait(until.elementLocated(By.xpath("//input[@id='continue']")),1000)
        await continue2.click();
        await driver.sleep(1000);

        let finish  = await driver.wait(until.elementLocated(By.xpath("//button[@id='finish']")),1000)
        await finish.click();
        await driver.sleep(1000);

        let backToHome  = await driver.wait(until.elementLocated(By.xpath("//button[@id='back-to-products']")),1000)
        await backToHome.click();
        await driver.sleep(1000);

        let button3  = await driver.wait(until.elementLocated(By.xpath("//button[@id='react-burger-menu-btn']")),1000)
        await button3.click();
        await driver.sleep(1000);

        let logout  = await driver.wait(until.elementLocated(By.xpath("//a[@id='logout_sidebar_link']")),1000)
        await logout.click();
        await driver.sleep(1000);



    } finally {
        // Tutup 
        await driver.quit();
    }
}

runTest();