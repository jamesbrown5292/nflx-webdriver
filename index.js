require('dotenv').config()
const {Builder, By, Key, Util, until} = require("selenium-webdriver");


async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("http://netflix.com/");
    // await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
    await driver.findElement(By.className("icon-close")).click()
    await driver.findElement(By.className("authLinks redButton")).click()
    await driver.findElement(By.className("nfTextField")).sendKeys(process.env.USERNAME, Key.TAB)
    await driver.findElement(By.id("id_password")).sendKeys(process.env.PASSWORD, Key.ENTER)
    await driver.wait(until.alertIsPresent());
    console.log("Switching to alert")
    let alert = await driver.switchTo().alert();
    console.log("Switched to alert")
    console.log("alert:", alert)


}
try {
    console.log("prcess env:", process.env)
    example(); 
} catch(e) {
    console.error(e);
}