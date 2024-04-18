from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("http://localhost/votesystem/index.php")

username = "oZunNqQSWitkYHL"
password = "1234"

driver.implicitly_wait(2)

driver.find_element(By.ID, "user_voter").send_keys(username)

driver.find_element(By.ID, "user_password").send_keys(password)

element = driver.find_element(By.ID , "user_login").click()

driver.implicitly_wait(2)

time.sleep(1.5)

SCROLL_PAUSE_TIME = 0.5

# Get scroll height
last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Wait to load page
    time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == last_height:
        break
    last_height = new_height

driver.implicitly_wait(1000)

print("User Test Runned Successfully!")

driver.quit()