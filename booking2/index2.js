const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://airly.eu/map/pl/')
  
  await page.setViewport({ width: 1920, height: 949 })
  
  await page.waitForSelector('.sc-prPLn > .sc-qWSGh > .sc-pAMRk > .sc-pRFZy:nth-child(4) > .sc-oTaAA')
  await page.click('.sc-prPLn > .sc-qWSGh > .sc-pAMRk > .sc-pRFZy:nth-child(4) > .sc-oTaAA')

  await page.screenshot({ path: '2.png' })
  
  
  await page.waitForSelector('.sc-fzozJi > .sc-AxhCb > div > .sc-AxirZ > span')
  await page.click('.sc-fzozJi > .sc-AxhCb > div > .sc-AxirZ > span')

  await page.screenshot({ path: '3.png' })
  
  
  await page.waitForSelector('.sc-fzoyTs > .sc-AxmLO > .sc-fzozJi > .sc-fzplWN > .sc-fznyAO:nth-child(3)')
  await page.click('.sc-fzoyTs > .sc-AxmLO > .sc-fzozJi > .sc-fzplWN > .sc-fznyAO:nth-child(3)')
  
  await page.waitForSelector('.sc-pmigq > .sc-puFxT > .sc-fzoyTs > .mapboxgl-canvas-container > .mapboxgl-canvas')
  await page.click('.sc-pmigq > .sc-puFxT > .sc-fzoyTs > .mapboxgl-canvas-container > .mapboxgl-canvas')

  await page.screenshot({ path: '4.png' })
  
  
  await page.waitForSelector('.sc-puFxT > .sc-qWgaf > .sc-fzoNJl > .sc-AxirZ > .Icon')
  await page.click('.sc-puFxT > .sc-qWgaf > .sc-fzoNJl > .sc-AxirZ > .Icon')
  
  await page.waitForSelector('.sc-pczax > .sc-pBzUF > .sc-pJUVA > .sc-fzoNJl > .sc-AxirZ')
  await page.click('.sc-pczax > .sc-pBzUF > .sc-pJUVA > .sc-fzoNJl > .sc-AxirZ')

  await page.screenshot({ path: '5.png' })
  
  
  await page.waitForSelector('.sc-fzozJi:nth-child(4) > .sc-AxhCb > div > .sc-AxirZ > .Icon > path:nth-child(1)')
  await page.click('.sc-fzozJi:nth-child(4) > .sc-AxhCb > div > .sc-AxirZ > .Icon > path:nth-child(1)')
  
  await browser.close()
})()