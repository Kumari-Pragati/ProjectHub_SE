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

def test_test2():
    driver, vars = setup_method()
    
    driver.get("http://127.0.0.1:5500/")
    driver.set_window_size(1552, 832)
    driver.find_element(By.LINK_TEXT, "ABOUT").click()
    driver.find_element(By.CSS_SELECTOR, "button").click()
    driver.find_element(By.LINK_TEXT, "DEMO").click()
    driver.find_element(By.CSS_SELECTOR, "button").click()
    driver.find_element(By.LINK_TEXT, "CONTACT").click()
    driver.find_element(By.CSS_SELECTOR, "button").click()
    
    teardown_method(driver)
