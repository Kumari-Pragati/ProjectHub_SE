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

driver = webdriver.Chrome()

driver.get("http://127.0.0.1:5500/index.html")
driver.set_window_size(1552, 832)
driver.find_element(By.LINK_TEXT, "Home").click()
driver.find_element(By.LINK_TEXT, "Login").click()
driver.find_element(By.LINK_TEXT, "Create Account").click()
driver.find_element(By.LINK_TEXT, "Login").click()
driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(1)").click()
driver.find_element(By.LINK_TEXT, "Order Food Now").click()
driver.find_element(By.CSS_SELECTOR, ".restaurant-card:nth-child(1) > img").click()
driver.find_element(By.LINK_TEXT, "Add to Cart").click()
driver.find_element(By.CSS_SELECTOR, ".btn").click()
assert driver.switch_to.alert.text == "Do you want to proceed with the payment?"
driver.switch_to.alert.accept()
assert driver.switch_to.alert.text == "Payment successful! ✓"
driver.quit()
