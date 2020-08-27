module.exports = async function (browser, inputParameters) {

const main = async () => {
  const page = await browser.newPage()
  await page.goto('https://unsplash.com')
  await page.screenshot({path: process.env.SCREENSHOTS_PATH + '/' + 'screenshot.png'})
  await browser.close()
}

await main()

};