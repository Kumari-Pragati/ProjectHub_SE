from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("http://localhost:3000/login")

username = "testuser"
password = "testuser@1234"
quantity = "10"
stock = "Google"

driver.implicitly_wait(2)

driver.find_element(By.ID, "username").send_keys(username)

driver.find_element(By.ID, "password").send_keys(password)

element = driver.find_element(By.ID , "login-button").click()

driver.implicitly_wait(2)

driver.find_element(By.ID, "navbar-search-button").click()

driver.find_element(By.ID, "stock-search-bar").click()

driver.find_element(By.ID, "stock-search-bar").send_keys(stock)

dropdown_options = driver.find_elements(By.XPATH, "//ul[@role='listbox']/li")

for option in dropdown_options:
    if option.text == stock:
        option.click()
        break

driver.implicitly_wait(20)

driver.find_element(By.ID, "open-purchase-button").click()
driver.find_element(By.ID, "quantity").click()
driver.find_element(By.ID, "quantity").send_keys(Keys.BACK_SPACE)
driver.find_element(By.ID, "quantity").send_keys(quantity)
driver.find_element(By.ID, "confirm-purchase-button").click()

driver.implicitly_wait(1000)

print("Stock Buy Test Passed")

driver.quit()
