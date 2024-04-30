import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

driver.get("http://localhost:5173/")
driver.set_window_size(1552, 832)

# Enter username
username_input = driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(1)")
username_input.click()  # Click to focus the element
username_input.send_keys("user")

# Enter password
password_input = driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(2)")
password_input.click()  # Click to focus the element
password_input.send_keys("user")

# Click on login button
login_button = driver.find_element(By.CSS_SELECTOR, ".font-bold:nth-child(3)")
login_button.click()

# Add WebDriverWait for the next page to load (adjust timeout if needed)
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".mt-2"))
)

# Click on some element after successful login
# For example, let's click on the element with class "mt-2"
some_element = driver.find_element(By.CSS_SELECTOR, ".mt-2")
some_element.click()

# Handle alert
try:
    alert = driver.switch_to.alert
    assert "Your fine is Rs: 0" in alert.text
    alert.accept()
except:
    print("No alert present or unable to access the alert.")


# Verify alert message
alert = driver.switch_to.alert
assert "Succesfully Return" in alert.text
alert.accept()

driver.quit()
