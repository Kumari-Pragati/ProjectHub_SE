
from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()
  
  


driver.get("http://localhost:5500/")
driver.set_window_size(1552, 832)
driver.find_element(By.LINK_TEXT, "ABOUT US").click()
driver.find_element(By.LINK_TEXT, "DOCTORS").click()
driver.find_element(By.LINK_TEXT, "GALLERY").click()
driver.find_element(By.LINK_TEXT, "BLOGS").click()
driver.find_element(By.LINK_TEXT, "CONTACT US").click()
driver.quit()
