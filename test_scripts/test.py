from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("http://localhost:5500/")
driver.set_window_size(1552, 832)
driver.find_element(By.LINK_TEXT, "REGISTRATION").click()
driver.find_element(By.LINK_TEXT, "LOGIN").click()
driver.find_element(By.NAME, "userid").click()
driver.find_element(By.NAME, "userid").send_keys("uparth164@gmail.com")
driver.find_element(By.NAME, "usrpsw").click()
driver.find_element(By.NAME, "usrpsw").send_keys("parth123")
driver.find_element(By.CSS_SELECTOR, "label").click()
driver.find_element(By.CSS_SELECTOR, ".btn").click()
driver.find_element(By.NAME, "userid").click()
driver.find_element(By.NAME, "userid").send_keys("pu29@gmail.com")
driver.find_element(By.NAME, "usrpsw").click()
driver.find_element(By.NAME, "usrpsw").send_keys("123")
driver.find_element(By.CSS_SELECTOR, "input:nth-child(1)").click()
driver.find_element(By.CSS_SELECTOR, ".btn").click()
driver.quit()
  