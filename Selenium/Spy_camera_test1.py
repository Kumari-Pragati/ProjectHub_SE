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

def setup_method(method):
    driver = webdriver.Chrome()
    vars = {}
    return driver, vars

def teardown_method(method, driver):
    driver.quit()

def test_test1():
    driver, vars = setup_method()
    
    driver.get("http://127.0.0.1:5500/index.html")
    driver.set_window_size(1552, 832)
    driver.find_element(By.NAME, "email").click()
    driver.find_element(By.NAME, "email").send_keys("daivik.hirpara@gmail.com")
    driver.find_element(By.CSS_SELECTOR, "input:nth-child(3)").click()
    driver.find_element(By.CSS_SELECTOR, "input:nth-child(3)").send_keys("daivik123")
    driver.find_element(By.CSS_SELECTOR, ".btnn").click()
    driver.find_element(By.LINK_TEXT, "JOIN US").click()
    
    teardown_method(driver)
