import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Setup WebDriver
driver = webdriver.Firefox()

def test_admin():
    driver.get("http://127.0.0.1:5500/Buycar.html")
    driver.set_window_size(1920, 1051)
    
    # Simulate human-like behavior with delays
    time.sleep(2)
    
    driver.find_element(By.LINK_TEXT, "Admin").click()
    
    # Simulate human-like behavior with delays
    time.sleep(1)
    
    driver.find_element(By.CSS_SELECTOR, ".username").click()
    driver.find_element(By.CSS_SELECTOR, ".username").send_keys("user")
    driver.find_element(By.CSS_SELECTOR, ".password").click()
    driver.find_element(By.CSS_SELECTOR, ".password").send_keys("user")
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    driver.find_element(By.CSS_SELECTOR, ".make").click()
    driver.find_element(By.CSS_SELECTOR, ".make").send_keys("chitransh")
    driver.find_element(By.CSS_SELECTOR, ".mileage").click()
    driver.find_element(By.CSS_SELECTOR, ".mileage").send_keys("963852")
    driver.find_element(By.CSS_SELECTOR, ".price").click()
    driver.find_element(By.CSS_SELECTOR, ".price").send_keys("741852")
    driver.find_element(By.CSS_SELECTOR, ".model").click()
    driver.find_element(By.CSS_SELECTOR, ".model").send_keys("gtr")
    driver.find_element(By.CSS_SELECTOR, ".year").click()
    driver.find_element(By.CSS_SELECTOR, ".year").send_keys("2001")
    driver.find_element(By.CSS_SELECTOR, ".sellerid").click()
    driver.find_element(By.CSS_SELECTOR, ".sellerid").send_keys("003")
    driver.find_element(By.CSS_SELECTOR, ".description:nth-child(7)").click()
    driver.find_element(By.CSS_SELECTOR, ".description:nth-child(7)").send_keys("its a good car")
    driver.find_element(By.CSS_SELECTOR, ".addCar").click()
    driver.find_element(By.CSS_SELECTOR, ".imageurls").click()
    driver.find_element(By.CSS_SELECTOR, ".imageurls").send_keys("image1")
    driver.find_element(By.CSS_SELECTOR, ".year").click()
    driver.find_element(By.CSS_SELECTOR, ".year").send_keys("2003")
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    
    # Wait for the delete button to be clickable
    delete_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".car:nth-child(5) > .deleteButton")))
    delete_button.click()

# Run the test function
test_admin()

# Close the WebDriver
driver.quit()
