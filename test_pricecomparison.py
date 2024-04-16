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

class TestPricecomparison():
  def setup_method(self, method):
    self.driver = webdriver.Remote(command_executor='http://localhost:4444/wd/hub', desired_capabilities=DesiredCapabilities.CHROME)
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def wait_for_window(self, timeout = 2):
    time.sleep(round(timeout / 1000))
    wh_now = self.driver.window_handles
    wh_then = self.vars["window_handles"]
    if len(wh_now) > len(wh_then):
      return set(wh_now).difference(set(wh_then)).pop()
  
  def test_pricecomparison(self):
    self.driver.get("http://127.0.0.1:3000/SE_Website2/SE/index.html")
    self.driver.set_window_size(789, 816)
    self.driver.find_element(By.ID, "menu-bars").click()
    self.driver.find_element(By.LINK_TEXT, "Price Comparison").click()
    self.driver.find_element(By.ID, "product-select").click()
    dropdown = self.driver.find_element(By.ID, "product-select")
    dropdown.find_element(By.XPATH, "//option[. = 'Smartphone']").click()
    self.vars["window_handles"] = self.driver.window_handles
    self.driver.find_element(By.CSS_SELECTOR, "#amazon > .view-button").click()
    self.vars["win4142"] = self.wait_for_window(2000)
    self.vars["root"] = self.driver.current_window_handle
    self.driver.switch_to.window(self.vars["win4142"])
    self.driver.switch_to.window(self.vars["root"])
    self.driver.find_element(By.ID, "product-select").click()
    dropdown = self.driver.find_element(By.ID, "product-select")
    dropdown.find_element(By.XPATH, "//option[. = 'Laptop']").click()
    self.vars["window_handles"] = self.driver.window_handles
    self.driver.find_element(By.CSS_SELECTOR, "#amazon > .view-button").click()
    self.vars["win6350"] = self.wait_for_window(2000)
    self.driver.switch_to.window(self.vars["win6350"])
    self.driver.switch_to.window(self.vars["root"])
    self.vars["window_handles"] = self.driver.window_handles
    self.driver.find_element(By.CSS_SELECTOR, "#flipkart > .view-button").click()
    self.vars["win860"] = self.wait_for_window(2000)
    self.driver.switch_to.window(self.vars["win860"])
    self.driver.close()
    self.driver.switch_to.window(self.vars["root"])
    self.driver.switch_to.window(self.vars["win6350"])
    self.driver.close()
    self.driver.switch_to.window(self.vars["root"])
    self.driver.switch_to.window(self.vars["win4142"])
    self.driver.close()
    self.driver.switch_to.window(self.vars["root"])
    self.driver.find_element(By.ID, "product-select").click()
    dropdown = self.driver.find_element(By.ID, "product-select")
    dropdown.find_element(By.XPATH, "//option[. = 'Tablet']").click()
    self.driver.switch_to.window(self.vars["root"])
    self.driver.find_element(By.ID, "product-select").click()
    dropdown = self.driver.find_element(By.ID, "product-select")
    dropdown.find_element(By.XPATH, "//option[. = 'Camera']").click()
    self.driver.switch_to.window(self.vars["root"])
    self.driver.find_element(By.ID, "product-section").click()
    self.driver.find_element(By.ID, "product-select").click()
    dropdown = self.driver.find_element(By.ID, "product-select")
    dropdown.find_element(By.XPATH, "//option[. = 'Smartwatch']").click()
    self.driver.switch_to.window(self.vars["root"])
  
