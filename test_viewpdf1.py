import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestViewpdf1():
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
  
    def test_viewpdf1(self):
        self.driver.get("http://localhost:3000/Register")
        self.driver.set_window_size(1296, 688)
        
        # Wait for 2 seconds
        time.sleep(2)
        
        # Navigate to Upload page
        self.driver.find_element(By.LINK_TEXT, "Upload").click()
        time.sleep(2)
        
        # Navigate to View page
        self.driver.find_element(By.LINK_TEXT, "View").click()
        time.sleep(2)
        
        # Navigate to View pdf page
        self.driver.find_element(By.LINK_TEXT, "View pdf").click()
        time.sleep(2)
        
        # Scroll to top of the page
        self.driver.execute_script("window.scrollTo(0, 0)")
        
        # Store current window handles
        self.vars["window_handles"] = self.driver.window_handles
        
        # Click on view pdf button
        view_pdf_btn = self.driver.find_element(By.CSS_SELECTOR, ".image-item:nth-child(9) > .view-image-btn")
        view_pdf_btn.click()
        
        # Wait for 2 seconds
        time.sleep(2)
        
        # Switch to new window
        self.vars["win1353"] = self.wait_for_window(2000)
        self.vars["root"] = self.driver.current_window_handle
        
        # Switch back to the original window
        self.driver.switch_to.window(self.vars["root"])

# Execute test
test_viewpdf1 = TestViewpdf1()
test_viewpdf1.setup_method()
test_viewpdf1.test_viewpdf1()
test_viewpdf1.teardown_method()
