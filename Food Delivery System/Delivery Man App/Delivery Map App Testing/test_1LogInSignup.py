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

# Click on the 'Create a new account on sizzle' link
driver.find_element(By.LINK_TEXT, "Create a new account on sizzle").click()

# Enter name and password
driver.find_element(By.NAME, "name").click()
driver.find_element(By.NAME, "name").send_keys("Gajendra.Patel")
driver.find_element(By.NAME, "password").send_keys("test")
driver.find_element(By.NAME, "password").send_keys(Keys.ENTER)

# Click on the 'Create Account' button
driver.find_element(By.CSS_SELECTOR, ".btn-danger-outline").click()

# Enter name and password again
driver.find_element(By.NAME, "name").click()
driver.find_element(By.NAME, "name").send_keys("Gajendra.Patel")
driver.find_element(By.NAME, "password").click()
driver.find_element(By.NAME, "password").send_keys("test")

# Click on the 'Log In' button
driver.find_element(By.CSS_SELECTOR, ".sub").click()

# Quit the WebDriver
driver.quit()
