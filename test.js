module.exports = async function (browser, { inputParameters, secretParameters }) {
  console.log(inputParameters, secretParameters);


  describe('test2', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().forBrowser('chrome').build()
      vars = {}
    })
    afterEach(async function() {
      await driver.quit();
    })
    async function waitForWindow(timeout = 2) {
      await driver.sleep(timeout)
      const handlesThen = vars["windowHandles"]
      const handlesNow = await driver.getAllWindowHandles()
      if (handlesNow.length > handlesThen.length) {
        return handlesNow.find(handle => (!handlesThen.includes(handle)))
      }
      throw new Error("New window did not appear before timeout")
    }
    it('test2', async function() {
      await driver.get("https://www.booking.com/index.pl.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEZyAEM2AED6AEBiAIBqAIDuALg4Jj6BcACAdICJDg1MzFmYzk5LTRhNmYtNDQwMS1hZWEyLTI0ZWIyMDIxNzQwNdgCBOACAQ;sid=dc65e172eab5e8773bf3779058275176;keep_landing=1&sb_price_type=total&")
      await driver.manage().window().setRect(960, 1053)
      await driver.findElement(By.id("ss")).click()
      await driver.findElement(By.id("ss")).click()
      {
        const element = await driver.findElement(By.id("ss"))
        await driver.actions({ bridge: true}).doubleClick(element).perform()
      }
      await driver.findElement(By.id("ss")).click()
      await driver.findElement(By.id("ss")).sendKeys("warszawa")
      await driver.findElement(By.css(".sb-autocomplete__item-with_photo:nth-child(1) > span:nth-child(2)")).click()
      await driver.findElement(By.css(".xp__input-group:nth-child(2) .sb-date-field__icon")).click()
      await driver.findElement(By.css(".bui-calendar__row:nth-child(1) > .bui-calendar__date:nth-child(2) > span > span")).click()
      await driver.findElement(By.css(".bui-calendar__wrapper:nth-child(2) .bui-calendar__row:nth-child(5) > .bui-calendar__date:nth-child(3) > span > span")).click()
      await driver.findElement(By.css(".xp__guests__count > span:nth-child(1)")).click()
      await driver.findElement(By.css(".sb-group__field-adults .bui-stepper__add-button > .bui-button__text")).click()
      await driver.findElement(By.id("group_adults")).sendKeys("3")
      await driver.findElement(By.id("group_adults")).sendKeys("4")
      {
        const element = await driver.findElement(By.css(".sb-group__field-adults .bui-stepper__add-button > .bui-button__text"))
        await driver.actions({ bridge: true}).doubleClick(element).perform()
      }
      await driver.findElement(By.id("group_adults")).sendKeys("5")
      await driver.findElement(By.css(".sb-group-children .bui-stepper__add-button > .bui-button__text")).click()
      await driver.findElement(By.id("group_children")).sendKeys("5")
      {
        const element = await driver.findElement(By.css(".sb-group-children .bui-stepper__add-button > .bui-button__text"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      await driver.findElement(By.id("group_children")).sendKeys("6")
      {
        const element = await driver.findElement(By.css(".sb-group-children .bui-stepper__add-button > .bui-button__text"))
        await driver.actions({ bridge: true}).doubleClick(element).perform()
      }
      await driver.findElement(By.id("group_children")).sendKeys("7")
      {
        const element = await driver.findElement(By.CSS_SELECTOR, "body")
        await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
      }
      await driver.findElement(By.css(".xp__guests__count > span:nth-child(3) > span")).click()
      await driver.findElement(By.css(".sb-group__field-rooms .bui-stepper__add-button")).click()
      await driver.findElement(By.id("no_rooms")).sendKeys("2")
      await driver.findElement(By.id("no_rooms")).sendKeys("3")
      {
        const element = await driver.findElement(By.css(".sb-group__field-rooms .bui-stepper__add-button"))
        await driver.actions({ bridge: true}).doubleClick(element).perform()
      }
      await driver.findElement(By.id("no_rooms")).sendKeys("4")
      await driver.findElement(By.css(".sb-searchbox__button")).click()
      vars["windowHandles"] = await driver.getAllWindowHandles()
      await driver.findElement(By.css(".sr_item:nth-child(1) .sr-hotel__name")).click()
      vars["win3538"] = await waitForWindow(2000)
      vars["root"] = await driver.getWindowHandle()
      vars["windowHandles"] = await driver.getAllWindowHandles()
      await driver.switchTo().window(vars["win3538"])
      vars["win3863"] = await waitForWindow(2000)
      await driver.switchTo().window(vars["win3863"])
      await driver.findElement(By.css("#wrap-hotelpage-top #hp_book_now_button > .bui-button__text")).click()
      await driver.executeScript("window.scrollTo(0,2521)")
      {
        const dropdown = await driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"))
        await dropdown.findElement(By.xpath("//option[. = 'regexp:1\\s+\\(27 524\\szł\\)']")).click()
      }
      {
        const element = await driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"))
        await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
      }
      {
        const element = await driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"))
        await driver.actions({ bridge: true }).moveToElement(element).release().perform()
      }
      await driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0")).click()
      await driver.executeScript("window.scrollTo(0,3188)")
      await driver.findElement(By.css(".txp-bui-main-pp")).click()
      {
        const element = await driver.findElement(By.css(".txp-bui-main-pp"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.css(".user_name_block"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      {
        const element = await driver.findElement(By.CSS_SELECTOR, "body")
        await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
      }
      {
        const element = await driver.findElement(By.css(".header-user-menu-link-s-logged-in"))
        await driver.actions({ bridge: true }).moveToElement(element).perform()
      }
      await driver.close()
      await driver.switchTo().window(vars["win3538"])
      await driver.close()
      await driver.switchTo().window(vars["undefined"])
      await driver.switchTo().window(vars["root"])
      await driver.close()
      await driver.switchTo().window(vars["undefined"])
    })
  })







};
