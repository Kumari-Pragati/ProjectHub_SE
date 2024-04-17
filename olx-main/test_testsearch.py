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

class TestTestsearch():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_testsearch(self):
    self.driver.get("http://localhost:3000/")
    self.driver.set_window_size(1552, 880)
    self.driver.find_element(By.CSS_SELECTOR, ".placeSearch > input").click()
    self.driver.find_element(By.CSS_SELECTOR, ".placeSearch > input").send_keys("DL")
    self.driver.find_element(By.CSS_SELECTOR, ".dataItem-header > p").click()
    self.driver.execute_script("window.scrollTo(0,72.80000305175781)")
    self.driver.find_element(By.CSS_SELECTOR, ".placeSearch > input").click()
    self.driver.find_element(By.CSS_SELECTOR, ".placeSearch > input").send_keys("Swi")
    self.driver.find_element(By.CSS_SELECTOR, ".dataItem-header:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".dataItem-header:nth-child(2)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".dataItem-header:nth-child(2)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".dataItem-header:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".dataItem-header:nth-child(2)").click()
    self.driver.close()
  
