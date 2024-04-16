const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

class ShareTextFilePage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://tapshare.xyz/";
        this.title_input = By.name("title");
        this.text_input = By.name("text");
        this.save_button = By.css(".bg-blue-500");
        this.share_button = By.css(".MuiButtonBase-root:nth-child(3)");
    }

    async openPage() {
        await this.driver.get(this.url);
        await this.driver.manage().window().setRect({ width: 697, height: 738 });
    }

    async enterTitle(title) {
        let titleField = await this.driver.findElement(this.title_input);
        await titleField.click();
        await titleField.sendKeys(title);
    }

    async enterText(text) {
        let textField = await this.driver.findElement(this.text_input);
        await textField.sendKeys(text);
    }

    async saveFile() {
        await this.driver.findElement(this.save_button).click();
    }

    async shareFile() {
        let shareButton = await this.driver.findElement(this.share_button);
        await shareButton.click();
    }
}

async function testShareTextFile() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
    let sharePage = new ShareTextFilePage(driver);

    try {
        await sharePage.openPage();
        await sharePage.enterTitle("Hi SAMPLE TEXT HEADING");
        await sharePage.enterText("Hello\nMy\nName\nis\nURVISH JOSHI");
        await sharePage.saveFile();
        await driver.wait(until.elementLocated(By.css(".MuiButtonBase-root:nth-child(3)"))).click();
        await sharePage.shareFile();
        await driver.wait(until.urlContains("https://tapshare.xyz/"));
    } finally {
        await driver.quit();
    }
}

testShareTextFile();
