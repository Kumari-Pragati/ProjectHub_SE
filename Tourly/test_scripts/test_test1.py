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

class TestTest1():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_test1(self):
    self.driver.get("http://127.0.0.1:5500/index.html")
    self.driver.set_window_size(794, 864)
    self.driver.find_element(By.ID, "book_now_beach").click()
    self.driver.find_element(By.ID, "cardName").click()
    self.driver.find_element(By.ID, "cardName").send_keys("raghu")
    self.driver.find_element(By.ID, "cardNumber").click()
    self.driver.find_element(By.ID, "cardNumber").send_keys("7894562135")
    self.driver.find_element(By.ID, "cardExpiry").click()
    self.driver.find_element(By.ID, "cardExpiry").send_keys("06/26")
    self.driver.find_element(By.ID, "cardCVC").click()
    self.driver.find_element(By.ID, "cardCVC").send_keys("788")
    self.driver.find_element(By.ID, "pay_credit").click()
    self.driver.find_element(By.ID, "return_home").click()
  
