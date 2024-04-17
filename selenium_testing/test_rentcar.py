import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()

def test_rentcar():
    driver.get("http://127.0.0.1:5500/Buycar.html")
    driver.set_window_size(1920, 1051)
    
    # Click on "Rent Car" link
    driver.find_element(By.LINK_TEXT, "Rent Car").click()
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Fill in pickup date
    pickup_date = driver.find_element(By.ID, "pickupDate")
    pickup_date.click()
    pickup_date.send_keys("0002-05-20")
    pickup_date.send_keys("0020-05-20")
    pickup_date.send_keys("0202-05-20")
    pickup_date.send_keys("2024-05-20")
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Fill in return date
    return_date = driver.find_element(By.ID, "returnDate")
    return_date.click()
    return_date.send_keys("0002-06-20")
    return_date.send_keys("0020-06-20")
    return_date.send_keys("0202-06-20")
    return_date.send_keys("2024-06-20")
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Select car type
    car_type_dropdown = driver.find_element(By.ID, "carType")
    car_type_dropdown.click()
    car_type_dropdown.find_element(By.XPATH, "//option[. = 'SUV']").click()
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Click on the button
    driver.find_element(By.CSS_SELECTOR, "button").click()
    time.sleep(2)  # Adding a delay to simulate human-like behavior

test_rentcar()

driver.quit()
