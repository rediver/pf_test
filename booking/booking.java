
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class Test2Test {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  public String waitForWindow(int timeout) {
    try {
      Thread.sleep(timeout);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    Set<String> whNow = driver.getWindowHandles();
    Set<String> whThen = (Set<String>) vars.get("window_handles");
    if (whNow.size() > whThen.size()) {
      whNow.removeAll(whThen);
    }
    return whNow.iterator().next();
  }
  @Test
  public void test2() {
    driver.get("https://www.booking.com/index.pl.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEZyAEM2AED6AEBiAIBqAIDuALg4Jj6BcACAdICJDg1MzFmYzk5LTRhNmYtNDQwMS1hZWEyLTI0ZWIyMDIxNzQwNdgCBOACAQ;sid=dc65e172eab5e8773bf3779058275176;keep_landing=1&sb_price_type=total&");
    driver.manage().window().setSize(new Dimension(960, 1053));
    driver.findElement(By.id("ss")).click();
    driver.findElement(By.id("ss")).click();
    {
      WebElement element = driver.findElement(By.id("ss"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("ss")).click();
    driver.findElement(By.id("ss")).sendKeys("warszawa");
    driver.findElement(By.cssSelector(".sb-autocomplete__item-with_photo:nth-child(1) > span:nth-child(2)")).click();
    driver.findElement(By.cssSelector(".xp__input-group:nth-child(2) .sb-date-field__icon")).click();
    driver.findElement(By.cssSelector(".bui-calendar__row:nth-child(1) > .bui-calendar__date:nth-child(2) > span > span")).click();
    driver.findElement(By.cssSelector(".bui-calendar__wrapper:nth-child(2) .bui-calendar__row:nth-child(5) > .bui-calendar__date:nth-child(3) > span > span")).click();
    driver.findElement(By.cssSelector(".xp__guests__count > span:nth-child(1)")).click();
    driver.findElement(By.cssSelector(".sb-group__field-adults .bui-stepper__add-button > .bui-button__text")).click();
    driver.findElement(By.id("group_adults")).sendKeys("3");
    driver.findElement(By.id("group_adults")).sendKeys("4");
    {
      WebElement element = driver.findElement(By.cssSelector(".sb-group__field-adults .bui-stepper__add-button > .bui-button__text"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("group_adults")).sendKeys("5");
    driver.findElement(By.cssSelector(".sb-group-children .bui-stepper__add-button > .bui-button__text")).click();
    driver.findElement(By.id("group_children")).sendKeys("5");
    {
      WebElement element = driver.findElement(By.cssSelector(".sb-group-children .bui-stepper__add-button > .bui-button__text"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("group_children")).sendKeys("6");
    {
      WebElement element = driver.findElement(By.cssSelector(".sb-group-children .bui-stepper__add-button > .bui-button__text"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("group_children")).sendKeys("7");
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector(".xp__guests__count > span:nth-child(3) > span")).click();
    driver.findElement(By.cssSelector(".sb-group__field-rooms .bui-stepper__add-button")).click();
    driver.findElement(By.id("no_rooms")).sendKeys("2");
    driver.findElement(By.id("no_rooms")).sendKeys("3");
    {
      WebElement element = driver.findElement(By.cssSelector(".sb-group__field-rooms .bui-stepper__add-button"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.id("no_rooms")).sendKeys("4");
    driver.findElement(By.cssSelector(".sb-searchbox__button")).click();
    vars.put("window_handles", driver.getWindowHandles());
    driver.findElement(By.cssSelector(".sr_item:nth-child(1) .sr-hotel__name")).click();
    vars.put("win3538", waitForWindow(2000));
    vars.put("root", driver.getWindowHandle());
    vars.put("window_handles", driver.getWindowHandles());
    driver.switchTo().window(vars.get("win3538").toString());
    vars.put("win3863", waitForWindow(2000));
    driver.switchTo().window(vars.get("win3863").toString());
    driver.findElement(By.cssSelector("#wrap-hotelpage-top #hp_book_now_button > .bui-button__text")).click();
    js.executeScript("window.scrollTo(0,2521)");
    {
      WebElement dropdown = driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"));
      dropdown.findElement(By.xpath("//option[. = 'regexp:1\\s+\\(27 524\\szł\\)']")).click();
    }
    {
      WebElement element = driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    driver.findElement(By.id("hprt_nos_select_1663819_246417335_3_2_0")).click();
    js.executeScript("window.scrollTo(0,3188)");
    driver.findElement(By.cssSelector(".txp-bui-main-pp")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".txp-bui-main-pp"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".user_name_block"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".header-user-menu-link-s-logged-in"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.close();
    driver.switchTo().window(vars.get("win3538").toString());
    driver.close();
    driver.switchTo().window(vars.get("undefined").toString());
    driver.switchTo().window(vars.get("root").toString());
    driver.close();
    driver.switchTo().window(vars.get("undefined").toString());
  }
}
