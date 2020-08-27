module.exports = async function (browser, inputParameters) {

(async () => {
  const browser = await puppeteer.launch()

  await page.goto('https://staging.powerfarm.ai/signin');

  await page.type('div #PolarisTextField1', 'aws-staging@makeitright.ai');
  await page.screenshot({ path: 'login.png' })

  await page.type('div #PolarisTextField2', 'LEES.faug2nusk7bag');

  await page.screenshot({ path: 'password.png' })	   

  await page.keyboard.press('Enter');	

  await page.waitForNavigation(); 

  console.log('Page URL:', page.url());
  console.log('Succesul login')

  await page.waitForSelector('.Polaris-Navigation__Section > .Polaris-Navigation__ListItem:nth-child(4) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  await page.click('.Polaris-Navigation__Section > .Polaris-Navigation__ListItem:nth-child(4) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  
  await page.screenshot({ path: 'workflows.png' })	   

  await page.waitForSelector('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(3) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  await page.click('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(3) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')  

  await page.screenshot({ path: 'tasks.png' })	   

  await page.waitForSelector('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(2) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')
  await page.click('.Polaris-Navigation__Section:nth-child(1) > .Polaris-Navigation__ListItem:nth-child(2) > .Polaris-Navigation__ItemWrapper > .Polaris-Navigation__Item > .Polaris-Navigation__Text')

  await page.screenshot({ path: 'schedule.png' })	   


})()
};
