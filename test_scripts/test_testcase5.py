
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
 
  
  
driver.get("http://localhost:5500/")
driver.set_window_size(1552, 832)
driver.find_element(By.LINK_TEXT, "CONTACT US").click()
driver.find_element(By.ID, "name").click()
driver.find_element(By.ID, "name").send_keys("boruto")
driver.find_element(By.ID, "email").click()
driver.find_element(By.ID, "email").click()
driver.find_element(By.ID, "email").send_keys("naruto23@gmail.com")
driver.find_element(By.ID, "subject").click()
driver.find_element(By.ID, "subject").send_keys("shippuden")
driver.find_element(By.ID, "number").click()
driver.find_element(By.ID, "number").send_keys("1231212120")
driver.find_element(By.ID, "message").click()
driver.find_element(By.ID, "message").send_keys("i will become hokage")
driver.find_element(By.CSS_SELECTOR, ".btn").click()
  
driver.quit()
