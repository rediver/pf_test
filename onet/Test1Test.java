// Generated by Selenium IDE
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
public class Test1Test {
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
  @Test
  public void test1() {
    driver.get("https://sport.onet.pl/");
    driver.manage().window().setSize(new Dimension(960, 1053));
    js.executeScript("window.scrollTo(0,268)");
    js.executeScript("window.scrollTo(0,675)");
    driver.findElement(By.id("searchQuery")).click();
    driver.findElement(By.id("searchQuery")).sendKeys("test");
    driver.findElement(By.id("searchQuery")).sendKeys(Keys.ENTER);
    {
      WebElement element = driver.findElement(By.linkText("Speedtest od Ookla – globalny test prędkości łącza ..."));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
  }
}
