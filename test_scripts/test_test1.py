from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()
  
 
driver.get("http://localhost:5500/")
driver.set_window_size(1552, 832)
driver.find_element(By.LINK_TEXT, "BOOK APPOINTMENT").click()
driver.find_element(By.ID, "name").click()
driver.find_element(By.ID, "name").send_keys("Parth")
driver.find_element(By.ID, "email").click()
driver.find_element(By.ID, "email").send_keys("yath@gmail.com")
driver.find_element(By.ID, "subject").click()
driver.find_element(By.ID, "subject").send_keys("Visit")
driver.find_element(By.ID, "number").click()
driver.find_element(By.ID, "number").send_keys("07666842647")
driver.find_element(By.ID, "number").click()
driver.find_element(By.ID, "number").send_keys("7666842647")
driver.find_element(By.ID, "department").click()
dropdown = driver.find_element(By.ID, "department")
dropdown.find_element(By.XPATH, "//option[. = 'Dermatology and Cosmetology']").click()
driver.find_element(By.ID, "date").click()
driver.find_element(By.ID, "date").send_keys("2024-04-19")
driver.find_element(By.ID, "time").click()
dropdown = driver.find_element(By.ID, "time")
dropdown.find_element(By.XPATH, "//option[. = '2 PM - 4 PM']").click()
driver.find_element(By.CSS_SELECTOR, ".btn").click()
driver.quit()
  
