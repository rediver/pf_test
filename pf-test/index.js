module.exports = async function (browser, inputParameters) {

const main = async () => {

  const page = await browser.newPage()
  await page.goto('https://staging.powerfarm.ai/signin');

  await page.setViewport({ width: 1920, height: 949 })

  await page.type('div #PolarisTextField1', 'aws-staging@makeitright.ai');
  await page.screenshot({path: process.env.SCREENSHOTS_PATH + '/' + 'login.png'})

  await page.type('div #PolarisTextField2', 'LEES.faug2nusk7bag');
  await page.screenshot({path: process.env.SCREENSHOTS_PATH + '/' + 'password.png'})	   

  await page.keyboard.press('Enter');	

  await page.waitForNavigation(); 

  console.log('Page URL:', page.url());
  console.log('Succesul login')

  await page.waitForSelector('.Polaris-Navigation__Section > .Polaris-Navigation__ListItem:nth-child(4) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  await page.click('.Polaris-Navigation__Section > .Polaris-Navigation__ListItem:nth-child(4) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  
  await page.screenshot({path: process.env.SCREENSHOTS_PATH + '/' + 'workflows.png'})  

  await page.waitForSelector('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(3) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  await page.click('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(3) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')  

  await page.screenshot({path: process.env.SCREENSHOTS_PATH + '/' + 'tasks.png'})   

  await page.waitForSelector('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(2) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  await page.click('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(2) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')

  await page.screenshot({path: process.env.SCREENSHOTS_PATH + '/' + 'schedule.png'}) 


}

await main()

};