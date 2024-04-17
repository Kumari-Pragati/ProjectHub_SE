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
driver.set_window_size(1536, 816)

# Enter name and password
driver.find_element(By.NAME, "name").click()
driver.find_element(By.NAME, "name").send_keys("Gajendra.Patel")
driver.find_element(By.NAME, "password").click()
driver.find_element(By.NAME, "password").send_keys("test")
driver.find_element(By.NAME, "password").send_keys(Keys.ENTER)

# Click on various elements
driver.find_element(By.CSS_SELECTOR, ".settings_account-inner:nth-child(5)").click()
driver.find_element(By.CSS_SELECTOR, ".delivery-item:nth-child(2) .earnings-per-order").click()
driver.find_element(By.CSS_SELECTOR, ".delivery-item:nth-child(3) p:nth-child(6)").click()
driver.find_element(By.CSS_SELECTOR, ".delivery-item:nth-child(4) p:nth-child(6)").click()
driver.find_element(By.LINK_TEXT, "Back to Main Page").click()
driver.find_element(By.LINK_TEXT, "Past Deliveries").click()
driver.find_element(By.CSS_SELECTOR, ".delivery-item:nth-child(2) p:nth-child(5)").click()
driver.find_element(By.CSS_SELECTOR, ".delivery-item:nth-child(3) > .delivery-info").click()
driver.find_element(By.CSS_SELECTOR, ".delivery-item:nth-child(4) > .delivery-info > p:nth-child(2)").click()
driver.find_element(By.LINK_TEXT, "Back to Main Page").click()
driver.find_element(By.CSS_SELECTOR, ".btn-danger-outline").click()

# Quit the WebDriver
driver.quit()
