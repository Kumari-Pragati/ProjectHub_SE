# This code shows that any user or parking space provider enter different password than their log in password
# then how website will react and then he/she enters correct password

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()  
driver.maximize_window()
driver.get("https://software-enginering-frontend.onrender.com/")

wait = WebDriverWait(driver, 10)
driver.find_element(By.XPATH, "//button[text()='Log In']").click()
time.sleep(5)
driver.find_element(By.ID,"email").send_keys("person1@gmail.com")
time.sleep(1)
driver.find_element(By.ID,"password").send_keys("123rdd")
time.sleep(1)
driver.find_element(By.XPATH, "//button[text()='Login']").click()
time.sleep(5)
driver.find_element(By.XPATH, "//button[text()='Log In']").click()
time.sleep(2)
driver.find_element(By.ID,"email").clear()
driver.find_element(By.ID,"email").send_keys("person1@gmail.com")
time.sleep(1)
driver.find_element(By.ID,"password").clear()
driver.find_element(By.ID,"password").send_keys("123")
time.sleep(1)
driver.find_element(By.XPATH, "//button[text()='Login']").click()
time.sleep(5)

driver.quit()
