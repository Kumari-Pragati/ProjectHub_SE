import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/login")

    def test_login_success(self):
        email = self.driver.find_element_by_xpath("//input[@type='email']")
        password = self.driver.find_element_by_xpath("//input[@type='password']")
        submit_button = self.driver.find_element_by_xpath("//button[@type='submit']")
        
        email.send_keys("test@example.com")
        password.send_keys("testpassword")
        submit_button.click()

        # Wait until redirected to the homepage
        WebDriverWait(self.driver, 10).until(EC.url_matches("http://localhost:3000/"))

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
