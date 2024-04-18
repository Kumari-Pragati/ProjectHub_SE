from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("http://localhost/votesystem/admin/index.php")

username = "shakti"
password = "password"

driver.implicitly_wait(2)

driver.find_element(By.ID, "username").send_keys(username)

driver.find_element(By.ID, "password").send_keys(password)

element = driver.find_element(By.ID , "login-button").click()

driver.implicitly_wait(2)

driver.find_element(By.ID, "votes.php").click()

time.sleep(1.5)

driver.find_element(By.ID, "voters.php").click()

time.sleep(1.5)

driver.find_element(By.ID, "positions.php").click()

time.sleep(1.5)

driver.find_element(By.ID, "candidates.php").click()

time.sleep(1.5)

driver.find_element(By.ID, "ballot.php").click()

time.sleep(1.5)

driver.find_element(By.ID, "election-title").click()

driver.implicitly_wait(1000)

print("Admin Test Runned Successfully!")

driver.quit()