# Generated by Selenium IDE

from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()
driver.get("http://localhost:3000/")
driver.set_window_size(1552, 832)
driver.find_element(By.LINK_TEXT, "Login").click()
driver.find_element(By.ID, "username").click()
driver.find_element(By.ID, "username").send_keys("Praveen")
driver.find_element(By.ID, "email").click()
driver.find_element(By.ID, "email").send_keys("ok@gmail")
driver.find_element(By.ID, "password").click()
driver.find_element(By.ID, "password").send_keys("1234")
driver.find_element(By.CSS_SELECTOR, ".sign").click()
driver.quit()
  