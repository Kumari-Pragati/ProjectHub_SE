import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()

def test_service_and_maintenance():
    driver.get("http://127.0.0.1:5500/Buycar.html")
    driver.set_window_size(1920, 1051)
    
    # Click on "Service And Maintenance" link
    driver.find_element(By.LINK_TEXT, "Service And Maintenance").click()
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Select car make
    car_make_input = driver.find_element(By.ID, "carMake")
    car_make_input.click()
    car_make_input.send_keys("NISSAN")
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Select car model
    car_model_input = driver.find_element(By.ID, "carModel")
    car_model_input.click()
    car_model_input.send_keys("GTR400")
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Select service type
    service_type_dropdown = driver.find_element(By.ID, "serviceType")
    service_type_dropdown.click()
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    service_type_dropdown.find_element(By.XPATH, "//option[text()='Tire Rotation']").click()
    time.sleep(1)  # Adding a delay to simulate human-like behavior
    
    # Click on submit button
    driver.find_element(By.CSS_SELECTOR, "button").click()
    

test_service_and_maintenance()

driver.quit()
