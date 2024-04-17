import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestUploadimg:
    def setup_method(self):
        self.driver = webdriver.Chrome()
  
    def teardown_method(self):
        self.driver.quit()

    def test_uploadimg(self):
        self.driver.get("http://localhost:3000/Register")
        self.driver.set_window_size(1296, 688)
        
        # Wait for 2 seconds
        time.sleep(2)
        
        # Navigate to Home page
        self.driver.find_element(By.LINK_TEXT, "Home").click()
        
        # Wait for 1 second
        time.sleep(1)
        
        # Navigate to Upload page
        self.driver.find_element(By.LINK_TEXT, "Upload").click()
        
        # Wait for 1 second
        time.sleep(1)
        
        # Navigate to Upload Image page
        wait = WebDriverWait(self.driver, 10)
        upload_image_link = wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "Upload Image")))
        upload_image_link.click()
        
        # Wait for 2 seconds
        time.sleep(2)
        
        # Upload Image
        image_input = self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(1)")
        image_input.click()
        image_input.send_keys("C:\\fakepath\\IMG-20210413-WA0002 (2).jpg")
        
        # Wait for 1 second
        time.sleep(1)
        
        # Enter Image Name
        image_name_input = self.driver.find_element(By.CSS_SELECTOR, "input:nth-child(2)")
        image_name_input.click()
        image_name_input.send_keys("demoimg")
        
        # Wait for 1 second
        time.sleep(1)
        
        # Submit Image
        submit_button = self.driver.find_element(By.CSS_SELECTOR, "button:nth-child(3)")
        submit_button.click()
        
        # Wait for 5 seconds for the alert
        time.sleep(5)
        
        try:
            alert = self.driver.switch_to.alert
            assert alert.text == "Image Uploaded Successfully"
            alert.accept()
        except:
            assert False, "Alert not found or different alert text."
        
        # Wait for 1 second
        time.sleep(1)
        
        # Navigate back to Upload page
        self.driver.find_element(By.LINK_TEXT, "Upload").click()

# Execute test
test_uploadimg = TestUploadimg()
test_uploadimg.setup_method()
test_uploadimg.test_uploadimg()
test_uploadimg.teardown_method()
