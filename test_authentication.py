import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestAuthentication():
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.vars = {}
  
    def teardown_method(self):
        self.driver.quit()
  
    def test_authentication(self):
        self.driver.get("http://localhost:3000/Register")
        self.driver.set_window_size(1296, 688)
        
        time.sleep(2)  # Wait for 2 seconds
        
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(1)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(1)").send_keys("ansh")
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(2)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(2)").send_keys("aayushicodingworld@gmail.com")
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(3)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(3)").send_keys("123")
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(4)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(4)").send_keys("15")
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.CSS_SELECTOR, ".submit-button").click()
        
        time.sleep(2)  # Wait for 2 seconds
        
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(1)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(1)").send_keys("aayushicodingworld@gmail.com")
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(2)").click()
        self.driver.find_element(By.CSS_SELECTOR, ".input-field:nth-child(2)").send_keys("123")
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.CSS_SELECTOR, ".submit-button").click()

test = TestAuthentication()
test.setup_method()
test.test_authentication()
test.teardown_method()
