from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

username = "testuser1000"
password = "testuser@1234"

driver.implicitly_wait(2)
driver.find_element(By.ID, "username").send_keys(username)

driver.find_element(By.ID, "password").send_keys(password)
# click on register button
driver.implicitly_wait(20)
element = driver.find_element(By.ID , "register-button").click()

driver.implicitly_wait(2)

driver.find_element(By.ID, "username").send_keys(username)

driver.find_element(By.ID, "password").send_keys(password)

element = driver.find_element(By.ID , "login-button").click()

driver.implicitly_wait(2)


print("Register Test Passed")

driver.quit()
