import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()

def test_buycar():
    driver.get("http://127.0.0.1:5500/Buycar.html")
    driver.set_window_size(1920, 1051)
    
    search_input = driver.find_element(By.ID, "searchInput")
    search_input.click()
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    search_input.send_keys("bmw")
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    search_input.send_keys(Keys.ENTER)

test_buycar()

driver.quit()
