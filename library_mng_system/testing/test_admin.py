import pytest
import json
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities



driver = webdriver.Chrome()
vars = {}
  
  
driver.get("http://localhost:5173/")
driver.set_window_size(858, 756)
driver.find_element(By.CSS_SELECTOR, ".bg-gray-300").click()
driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(1)").click()
sleep(1)
driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(1)").send_keys("admin")
driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(2)").send_keys("admin")
driver.find_element(By.CSS_SELECTOR, ".text-1\\.5xl").click()
sleep(1)
  
driver.close()
