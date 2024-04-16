from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://127.0.0.1:5500/index.html")
try:
    # Wait for the "Our Services" dropdown to be clickable
    services_dropdown = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//a[@id='navbarDropdown']"))
    )

    # Click on the "Our Services" dropdown
    services_dropdown.click()

    # Wait for the "Select Driver" link to be visible
    select_driver_link = WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.XPATH, "//a[@href='driverinfo.html']"))
    )

    # Click on the "Select Driver" link
    select_driver_link.click()
    driver_options = WebDriverWait(driver, 5).until(
        EC.visibility_of_all_elements_located((By.XPATH, "//a[@class='car-button']"))
    )

    # Select the first driver option
    driver_options[0].click()

    # Wait for the billing page to load
    billing_page_loaded = WebDriverWait(driver, 5).until(
        EC.url_contains("billing.html")
    )

    if billing_page_loaded:
        print("Billing page loaded successfully.")

finally:
    # Close the WebDriver
    driver.quit()
