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

def test_test3():
    driver, vars = setup_method()
    
    driver.get("http://127.0.0.1:5500/")
    driver.set_window_size(1552, 832)
    driver.find_element(By.LINK_TEXT, "SERVICE").click()
    driver.find_element(By.ID, "basic-btn").click()
    driver.find_element(By.LINK_TEXT, "Go back to Services").click()
    driver.find_element(By.ID, "pro-btn").click()
    driver.find_element(By.LINK_TEXT, "Go back to Services").click()
    driver.find_element(By.ID, "enterprise-btn").click()
    driver.find_element(By.LINK_TEXT, "Phone and email support").click()
    driver.find_element(By.CSS_SELECTOR, ".back-btn").click()
    driver.find_element(By.ID, "pro-btn").click()
    driver.find_element(By.LINK_TEXT, "Help center access").click()
    driver.find_element(By.CSS_SELECTOR, ".back-btn").click()
    driver.find_element(By.ID, "basic-btn").click()
    driver.find_element(By.LINK_TEXT, "Go to Functionalities").click()
    driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(1)").click()
    driver.find_element(By.LINK_TEXT, "Home").click()
    
    teardown_method(driver)
