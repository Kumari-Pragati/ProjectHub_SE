
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

  
driver.get("http://localhost:5500/")
driver.set_window_size(1552, 832)
driver.find_element(By.LINK_TEXT, "LOGIN").click()
driver.find_element(By.NAME, "userid").click()
driver.find_element(By.NAME, "userid").send_keys("koko12@gmail.com")
driver.find_element(By.NAME, "usrpsw").click()
driver.find_element(By.NAME, "usrpsw").send_keys("hi123")
driver.find_element(By.CSS_SELECTOR, ".btn").click()
driver.quit()
