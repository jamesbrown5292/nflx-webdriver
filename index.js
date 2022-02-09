require('dotenv').config()
const {Builder, By, Key, Util, until} = require("selenium-webdriver");


async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get("http://netflix.com/clearcookies");
    } catch(e) {
        console.error("error:", e)
    }
    try{
        await driver.get("http://netflix.com/");
    } catch(e) {
        console.error("error:", e)
    }
    try {
        await driver.findElement(By.className("icon-close")).click()
    } catch(e) {
        console.error("error:", e)
    }
    try {
        await driver.findElement(By.className("authLinks redButton")).click()
    } catch(e) {
        console.error("error:", e)
    }
    try {
        await driver.findElement(By.className("nfTextField")).sendKeys(process.env.USERNAME, Key.TAB)
    } catch(e) {
        console.error("error:", e)
    }
    try {
        await driver.findElement(By.id("id_password")).sendKeys(process.env.PASSWORD, Key.ENTER)
    } catch(e) {
        console.error("error:", e)
    }
    try {
        await driver.wait(until.elementLocated(By.className("profile-icon")), 10000)
        await driver.findElement(By.className("profile-icon")).click()
    } catch(e) {
        console.error(e)
    }
    // try {
    //     await driver.wait(until.elementLocated(By.className("profile-icon")), 10000)
    //     await driver.findElement(By.className("icon-search")).click()
    //     await driver.wait(until.elementLocated(By.className("searchInput")), 3000)
    //     await driver.switchTo().activeElement().sendKeys("the tinder swindler", Key.ENTER)
    // } catch(e) {
    //     console.error("search icon error:", e);
    // }
    try {
        await driver.get("http://netflix.com/search?q=the%20tindler%20swindler");
    } catch(e) {
        console.error("error:", e)
    }
    // await driver.wait(until.alertIsPresent(0), 20000);
    // let alert = await driver.switchTo().alert();
    try {
        await driver.wait(until.elementLocated(By.xpath('//*[@id="title-card-0-0"]/div[1]/a')), 3000)
        await driver.findElement(By.xpath('//*[@id="title-card-0-0"]/div[1]/a')).click()
    } catch(e) {
        console.error("show click  error:", e);
    }
    try {
        await driver.wait(until.elementLocated(By.xpath('//*[@id="appMountPoint"]/div/div/div[1]/div[2]/div/div[1]/div[4]/div/div[1]/div[1]/a/button')), 3000)
        // await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[1]/div[2]/div/div[1]/div[4]/div/div[1]/div[1]/a/button')).click()
    } catch(e) {
        console.error("show play  error:", e);
    }
}
try {
    example(); 
} catch(e) {
    console.error(e);
}