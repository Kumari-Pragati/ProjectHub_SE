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

class TestViewimg():
    def setup_method(self):
        self.driver = webdriver.Chrome()
        self.vars = {}
  
    def teardown_method(self):
        self.driver.quit()

    def wait_for_window(self, timeout=2):
        time.sleep(round(timeout / 1000, 2))
        wh_now = self.driver.window_handles
        wh_then = self.vars["window_handles"]
        if len(wh_now) > len(wh_then):
            return set(wh_now).difference(set(wh_then)).pop()

    def test_viewimg(self):
        self.driver.get("http://localhost:3000/Register")
        self.driver.set_window_size(1296, 688)
        
        time.sleep(2)  # Wait for 2 seconds
        
        self.driver.find_element(By.LINK_TEXT, "Home").click()
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.LINK_TEXT, "View").click()
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.LINK_TEXT, "View Image").click()
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.execute_script("window.scrollTo(0,0)")
        
        self.vars["window_handles"] = self.driver.window_handles
        
        time.sleep(1)  # Wait for 1 second
        
        self.driver.find_element(By.CSS_SELECTOR, ".image-item:nth-child(9) > .view-image-btn").click()
        
        time.sleep(2)  # Wait for 2 seconds for new window to open
        
        self.vars["win922"] = self.wait_for_window(2000)
        self.driver.switch_to.window(self.vars["win922"])

test = TestViewimg()
test.setup_method()
test.test_viewimg()
test.teardown_method()
