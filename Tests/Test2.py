# This code is for if the user or parking space provider enters different password
# during sign up in password and re-password


import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()  
driver.maximize_window()
driver.get("https://software-enginering-frontend.onrender.com/")

wait = WebDriverWait(driver, 10)

driver.find_element(By.XPATH, "//button[text()='Sign Up']").click()
time.sleep(5) 
driver.find_element(By.ID,"LoginEmail").send_keys("yash@gmail.com")
time.sleep(1)
driver.find_element(By.ID,"name").send_keys("Yash")
time.sleep(1)
driver.find_element(By.ID,"loginPassword").send_keys("34563456")
time.sleep(1)
driver.find_element(By.ID,"loginPasswordRe").send_keys("34563456aa")
time.sleep(1)
driver.find_element(By.XPATH, "//button[@value='provider']").click()
time.sleep(2)
driver.find_element(By.XPATH, "//button[text()='Sign up']").click()
time.sleep(5)

driver.quit()
