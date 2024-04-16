from selenium import webdriver
driver = webdriver.Chrome()
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

# Replace the below line with the appropriate port number and path to the file Home.html
driver.get("http://127.0.0.1:5500/Register.html")
driver.set_window_size(1346, 700)
driver.find_element(By.NAME, "fullname").click()
driver.find_element(By.NAME, "fullname").send_keys("test1")
driver.find_element(By.NAME, "email").send_keys("test@test.com")
driver.find_element(By.ID, "phone").send_keys("8889911122")
driver.find_element(By.NAME, "password").send_keys("1234")
driver.find_element(By.NAME, "confirmpassword").send_keys("1234")
driver.find_element(By.CSS_SELECTOR, "button:nth-child(11)").click()
driver.find_element(By.LINK_TEXT, "Concerts").click()
driver.find_element(By.CSS_SELECTOR, ".event:nth-child(1) > h2").click()
driver.find_element(By.CSS_SELECTOR, ".event:nth-child(1) img").click()