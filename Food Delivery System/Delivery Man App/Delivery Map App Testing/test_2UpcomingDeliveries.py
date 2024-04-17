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

# Initialize WebDriver
driver = webdriver.Chrome()
vars = {}

# Open the website
driver.get("http://localhost:3000/")
driver.set_window_size(1552, 832)

# Enter name and password
driver.find_element(By.NAME, "name").click()
driver.find_element(By.NAME, "name").send_keys("Gajendra.Patel")
driver.find_element(By.NAME, "password").click()
driver.find_element(By.NAME, "password").send_keys("test")
driver.find_element(By.CSS_SELECTOR, ".sub").click()

# Click on various elements
driver.find_element(By.CSS_SELECTOR, ".settings_account-inner:nth-child(4)").click()
driver.find_element(By.ID, "markPickedUpBtn").click()
driver.find_element(By.CSS_SELECTOR, ".container").click()
driver.find_element(By.CSS_SELECTOR, ".container").click()

# Double click on an element
element = driver.find_element(By.CSS_SELECTOR, ".container")
actions = ActionChains(driver)
actions.double_click(element).perform()

driver.find_element(By.CSS_SELECTOR, ".container").click()
driver.find_element(By.CSS_SELECTOR, ".container").click()
driver.find_element(By.ID, "markCompletedBtn").click()
driver.find_element(By.LINK_TEXT, "Back to Main Page").click()
driver.find_element(By.CSS_SELECTOR, ".setting__right--side-inner").click()
driver.find_element(By.CSS_SELECTOR, ".btn-danger-outline").click()
driver.find_element(By.CSS_SELECTOR, "html").click()

# Quit the WebDriver
driver.quit()
