from selenium import webdriver
driver = webdriver.Chrome()
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time

# Replace the below line with the appropriate port number and path to the file Home.html
driver.get("http://127.0.0.1:5500/Home.html")
driver.set_window_size(600, 864)
time.sleep(2)
driver.find_element(By.LINK_TEXT, "Home").click()
driver.find_element(By.LINK_TEXT, "Concerts").click()
driver.find_element(By.CSS_SELECTOR, ".event:nth-child(1) img").click()
driver.find_element(By.LINK_TEXT, "Concerts").click()
driver.find_element(By.CSS_SELECTOR, ".search-bar").click()
driver.find_element(By.CSS_SELECTOR, "button:nth-child(1)").click()
driver.find_element(By.CSS_SELECTOR, ".filter-buttons > button:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, "button:nth-child(3)").click()
driver.find_element(By.CSS_SELECTOR, "button:nth-child(4)").click()
driver.find_element(By.CSS_SELECTOR, "button:nth-child(1)").click()