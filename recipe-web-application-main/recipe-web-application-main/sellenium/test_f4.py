import pytest
import time
import json
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import pyautogui

class TestF4():
    def setup_method(self, method):
        self.driver = webdriver.Chrome()
        self.vars = {}

    def teardown_method(self, method):
        self.driver.quit()

    def test_f4(self):
        self.driver.get("http://localhost:5173/")
        self.driver.set_window_size(1296, 688)

        user_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".user-button > img"))
        )
        user_button.click()

        
        sign_up_link = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Sign Up"))
        )
        sign_up_link.click()

        
        username_field = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.ID, "username"))
        )
        username_field.click()
        username_field.send_keys("dulu")

        
        email_field = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.ID, "email"))
        )
        email_field.click()
        email_field.send_keys("dulu@gmail.com")

        
        password_field = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.ID, "password"))
        )
        password_field.click()
        password_field.send_keys("dulu")

        
        small_circle = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".small-circle > img"))
        )
        small_circle.click()

        
        time.sleep(2)  
        file_path = os.path.abspath("C:\\Users\\harsh\\OneDrive\\Pictures\\Screenshots\\dulu.jpeg")  
        pyautogui.write(file_path)
        pyautogui.press("enter")

        
        primary_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".primary-button"))
        )
        primary_button.click()

if __name__ == "__main__":
    pytest.main()
