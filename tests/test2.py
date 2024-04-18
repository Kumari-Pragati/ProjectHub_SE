from selenium import webdriver
from selenium.webdriver.common.by import By  # Import the By class
import time
import random
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
options = Options()
options.add_experimental_option("detach", True)

driver = webdriver.Chrome(executable_path='tests\driver\chromedriver.exe',options=options)
username="User"+str(random.randint(0,1000))

driver.get("http://localhost:5173/login")
driver.maximize_window()
time.sleep(5)
element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[1]/input")
element.click()
element.send_keys(username)
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[2]/input")
element.click()
element.send_keys("Nipur20@")
time.sleep(2)
driver.find_element(By.XPATH,"/html/body/div/div/form/div[3]/button").click()
time.sleep(2)
