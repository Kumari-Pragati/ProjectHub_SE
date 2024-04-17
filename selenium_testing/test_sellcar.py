import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Setup WebDriver
driver = webdriver.Firefox()

def test_sellcar():
    driver.get("http://127.0.0.1:5500/Buycar.html")
    driver.set_window_size(1920, 1051)
    
    time.sleep(2)  # Adding a delay to simulate human-like behavior
    
    # Click on "Sell Car" link
    driver.find_element(By.LINK_TEXT, "Sell Car").click()
    
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Enter car details
    input_field = driver.find_element(By.CSS_SELECTOR, "input")
    input_field.click()
    input_field.send_keys("DL 295 2058920")
    
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Click on the submit button
    driver.find_element(By.CSS_SELECTOR, "button").click()

# Run the test function
test_sellcar()

# Close the WebDriver
driver.quit()
