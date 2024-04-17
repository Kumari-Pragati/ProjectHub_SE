
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

from selenium.webdriver.support import expected_conditions as EC

class TestF1():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_f1(self):
    self.driver.get("http://localhost:5173/")
    self.driver.set_window_size(1296, 688)

    
    WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".user-button > img"))).click()

    
    WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".not-logged-in > button:nth-child(1)"))).click()

    
    WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.LINK_TEXT, "Login"))).click()

    
    WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".login-main"))).click()

    
    email_field = WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "email")))
    email_field.click()
    email_field.send_keys("ruh@gmail.com")

    
    password_field = WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "password")))
    password_field.click()
    password_field.send_keys("euh")

    
    WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".primary-button"))).click()
