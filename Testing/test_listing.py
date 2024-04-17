from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

class TestListing():
    def setup_method(self, method):
        self.driver = webdriver.Chrome()
        self.vars = {}

    def teardown_method(self, method):
        self.driver.quit()

    def test_listing(self):
        self.driver.get("http://localhost:3000/login")
        self.driver.set_window_size(1552, 832)
        self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(1)").click()
        self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(1)").send_keys("login@gmail.com")
        self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(2)").send_keys("login")
        self.driver.find_element(By.CSS_SELECTOR, "button").click()
        self.driver.find_element(By.LINK_TEXT, "Become A Host").click()
        self.driver.find_element(By.CSS_SELECTOR, ".category:nth-child(4) > p").click()
        self.driver.find_element(By.CSS_SELECTOR, ".type:nth-child(2) h4").click()
        self.driver.find_element(By.NAME, "streetAddress").click()
        self.driver.find_element(By.NAME, "streetAddress").send_keys("701, GR5")
        self.driver.find_element(By.NAME, "aptSuite").click()
        self.driver.find_element(By.NAME, "aptSuite").send_keys("Geet Residency")
        self.driver.find_element(By.NAME, "city").send_keys("Gandhinagar")
        self.driver.find_element(By.NAME, "province").send_keys("Gujarat")
        self.driver.find_element(By.NAME, "country").send_keys("India")
        self.driver.find_element(By.CSS_SELECTOR, ".basic:nth-child(1) .MuiSvgIcon-root:nth-child(3)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".basic:nth-child(1) .MuiSvgIcon-root:nth-child(3)").click()
        element = self.driver.find_element(By.CSS_SELECTOR, ".basic:nth-child(1) .MuiSvgIcon-root:nth-child(3)")
        actions = ActionChains(self.driver)
        actions.double_click(element).perform()
        self.driver.find_element(By.CSS_SELECTOR, ".basic:nth-child(1) .MuiSvgIcon-root:nth-child(3)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".basic:nth-child(2) .MuiSvgIcon-root:nth-child(3)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".basic:nth-child(3) .MuiSvgIcon-root:nth-child(3)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".basic:nth-child(4) .MuiSvgIcon-root:nth-child(3)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".facility:nth-child(1)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".facility:nth-child(8)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".facility:nth-child(9) > p").click()
        self.driver.find_element(By.CSS_SELECTOR, ".facility:nth-child(15)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".facility:nth-child(27)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".facility:nth-child(12)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".facility:nth-child(10) > p").click()
        self.driver.find_element(By.NAME, "title").click()
        self.driver.find_element(By.NAME, "title").send_keys("Good place to stay with your family")
        self.driver.find_element(By.CSS_SELECTOR, "textarea:nth-child(4)").send_keys("Description")
        self.driver.find_element(By.NAME, "highlight").send_keys("Highlight")
        self.driver.find_element(By.NAME, "highlightDesc").send_keys("Highlight Details")
        self.driver.find_element(By.NAME, "price").send_keys("50")
        self.driver.find_element(By.CSS_SELECTOR, ".submit_btn").click()
        self.driver.execute_script("window.scrollTo(0,1804.4444580078125)")
        self.driver.find_element(By.CSS_SELECTOR, ".navbar_right_account").click()
        self.driver.find_element(By.LINK_TEXT, "Property List").click()
        self.driver.find_element(By.CSS_SELECTOR, ".listing-card:nth-child(4)").click()

test = TestListing()
test.setup_method(None)
test.test_listing()
test.teardown_method(None)
