import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestViewpdf():
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
  
    def test_viewpdf(self):
        self.driver.get("http://localhost:3000/Register")
        self.driver.set_window_size(1296, 688)
        
        # Navigate to Home page
        self.driver.find_element(By.LINK_TEXT, "Home").click()
        time.sleep(2)  # Wait for 2 seconds
        
        # Navigate to View page
        self.driver.find_element(By.LINK_TEXT, "View").click()
        time.sleep(2)  # Wait for 2 seconds
        
        # Navigate to View pdf page
        self.driver.find_element(By.LINK_TEXT, "View pdf").click()
        time.sleep(2)  # Wait for 2 seconds
        
        # Store current window handles
        self.vars["window_handles"] = self.driver.window_handles
        
        # Click on view pdf button
        view_pdf_btn = self.driver.find_element(By.CSS_SELECTOR, ".image-item:nth-child(9) > .view-image-btn")
        view_pdf_btn.click()
        
        # Wait for 2 seconds
        time.sleep(2)
        
        # Switch to new window
        self.vars["win3345"] = self.wait_for_window(2000)
        self.driver.switch_to.window(self.vars["win3345"])

# Execute test
test_viewpdf = TestViewpdf()
test_viewpdf.setup_method()
test_viewpdf.test_viewpdf()
test_viewpdf.teardown_method()
