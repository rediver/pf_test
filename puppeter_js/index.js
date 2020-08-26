const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://www.selenium.dev/selenium-ide/docs/en/plugins/plugins-getting-started')

  await page.setViewport({ width: 1920, height: 949 })

  await page.waitForSelector('.navGroups > .navGroup:nth-child(2) > ul > .navListItem:nth-child(3) > .navItem')
  await page.click('.navGroups > .navGroup:nth-child(2) > ul > .navListItem:nth-child(3) > .navItem')

  await navigationPromise

  await page.waitForSelector('div > span > ul > li:nth-child(3) > a')
  await page.click('div > span > ul > li:nth-child(3) > a')

  await navigationPromise

  await navigationPromise
  and their patterns if we want to assume .maven building is only proper standard, use case
￼

  await navigationPromise

  await browser.close()
})()
