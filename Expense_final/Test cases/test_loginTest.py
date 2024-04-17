# Generated by Selenium IDE
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

class TestLoginTest():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_loginTest(self):
    self.driver.get("http://localhost/Expense_final/Frontend/homepage.html/Expense_final/Frontend/homepage.html")
    self.driver.set_window_size(784, 816)
    time.sleep(2) 
    self.driver.find_element(By.LINK_TEXT, "Login").click()
    self.driver.find_element(By.NAME, "username").click()
    self.driver.find_element(By.NAME, "username").send_keys("vijay")
    time.sleep(2) 
    self.driver.find_element(By.NAME, "password").click()
    self.driver.find_element(By.NAME, "password").click()
    self.driver.find_element(By.NAME, "password").send_keys("1234")
    time.sleep(2) 
    self.driver.find_element(By.CSS_SELECTOR, "button").click()
    self.driver.find_element(By.LINK_TEXT, "Logout").click()
    time.sleep(2) 
  
