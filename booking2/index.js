const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.booking.com/?aid=336347')
  
  await page.setViewport({ width: 1920, height: 949 })
  await page.screenshot({ path: '1.png' })
  
  await page.waitForSelector('.xp__input-group #ss')
  await page.click('.xp__input-group #ss')
  
  await page.waitForSelector('div > .c-autocomplete > .c-autocomplete__list:nth-child(2) > .c-autocomplete__item:nth-child(1) > span:nth-child(2)')
  await page.click('div > .c-autocomplete > .c-autocomplete__list:nth-child(2) > .c-autocomplete__item:nth-child(1) > span:nth-child(2)')
  
  await page.waitForSelector('#frm > .xp__fieldset > .xp__dates > .xp__dates-inner > .xp__input-group:nth-child(2)')
  await page.click('#frm > .xp__fieldset > .xp__dates > .xp__dates-inner > .xp__input-group:nth-child(2)')
  
  await page.waitForSelector('tbody > .bui-calendar__row > .bui-calendar__date--today > span > span')
  await page.click('tbody > .bui-calendar__row > .bui-calendar__date--today > span > span')
  await page.screenshot({ path: '2.png' })
  
  await page.waitForSelector('.bui-calendar__wrapper:nth-child(2) > .bui-calendar__dates > tbody > .bui-calendar__row:nth-child(5) > .bui-calendar__date:nth-child(3) > span > span')
  await page.click('.bui-calendar__wrapper:nth-child(2) > .bui-calendar__dates > tbody > .bui-calendar__row:nth-child(5) > .bui-calendar__date:nth-child(3) > span > span')
  
  await page.waitForSelector('.xp__fieldset > .xp__button > .sb-searchbox-submit-col > .sb-searchbox__button > span:nth-child(1)')
  await page.click('.xp__fieldset > .xp__button > .sb-searchbox-submit-col > .sb-searchbox__button > span:nth-child(1)')
  
  await page.waitForSelector('.xp__input-group:nth-child(3) > .xp__dates-inner > .xp__group > .sb-date-field > .sb-searchbox__input > .sb-date-field__icon')
  await page.click('.xp__input-group:nth-child(3) > .xp__dates-inner > .xp__group > .sb-date-field > .sb-searchbox__input > .sb-date-field__icon')
  
  await page.waitForSelector('tbody > .bui-calendar__row:nth-child(4) > .bui-calendar__date--in-range:nth-child(1) > span > span')
  await page.click('tbody > .bui-calendar__row:nth-child(4) > .bui-calendar__date--in-range:nth-child(1) > span > span')
  
  await page.waitForSelector('.xp__fieldset > .xp__button > .sb-searchbox-submit-col > .sb-searchbox__button > span:nth-child(1)')
  await page.click('.xp__fieldset > .xp__button > .sb-searchbox-submit-col > .sb-searchbox__button > span:nth-child(1)')
  await page.screenshot({ path: '3.png' })
  
  await navigationPromise
  
  await page.waitForSelector('.sr_item:nth-child(1) > .sr_item_content:nth-child(2) > .sr_rooms_table_block:nth-child(3) > .room_details:nth-child(1) > .featuredRooms:nth-child(1) .roomrow:nth-child(1) > .roomPrice:nth-child(2) .roomFooter:nth-child(1) > .sr-cta-button-row:nth-child(1) .bui-button__text:nth-child(1)')
  await page.click('.sr_item:nth-child(1) > .sr_item_content:nth-child(2) > .sr_rooms_table_block:nth-child(3) > .room_details:nth-child(1) > .featuredRooms:nth-child(1) .roomrow:nth-child(1) > .roomPrice:nth-child(2) .roomFooter:nth-child(1) > .sr-cta-button-row:nth-child(1) .bui-button__text:nth-child(1)')
  await page.screenshot({ path: '4.png' })


  await navigationPromise
  
  await browser.close()
})()
