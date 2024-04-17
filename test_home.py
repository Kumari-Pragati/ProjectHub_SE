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

class TestHome():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_home(self):
    self.driver.get("http://127.0.0.1:5500/")
    self.driver.set_window_size(783, 864)
    self.driver.find_element(By.LINK_TEXT, "Home").click()
    self.driver.find_element(By.ID, "username").click()
    self.driver.find_element(By.ID, "username").send_keys("rishabnigam02@gmail.com")
    self.driver.find_element(By.ID, "password").click()
    self.driver.find_element(By.ID, "password").send_keys("6546545641")
    self.driver.find_element(By.CSS_SELECTOR, "form > button").click()
  
