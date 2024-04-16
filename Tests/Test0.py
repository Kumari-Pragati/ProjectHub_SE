# This code is for entire working of our website for both NEW USER and NEW PARKING SPACE PROVIDER

# IF THE USER OR PROVIDER ALREADY SIGN IN , THEY JUST HAVE TO LOG IN 
# THE PROVIDER CAN REGISTER FOR ONE PARKING SPACE FOR NOW 
# THE USER CAN BOOK DIFFERENT TICKETS AND ALSO SEES HIS PREVIOUS TICKETS IN (MY TICKETS) 
# HE/SHE SCAN THE QR Code for his ticket while enrty and exit the parking space (Its is our concept to calculate space available to park another vehicles) 
# ONCE TICKET IS BOOKED, THE NUMBER OF OCCUPIED SPACE WILL BE +1 

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()  
driver.maximize_window()
driver.get("https://software-enginering-frontend.onrender.com/")

wait = WebDriverWait(driver, 10)

# ##### for provider

driver.find_element(By.XPATH, "//button[text()='Sign Up']").click()
time.sleep(5) 
driver.find_element(By.ID,"LoginEmail").send_keys("virat123@gmail.com")
time.sleep(1)
driver.find_element(By.ID,"name").send_keys("Virat Singh")
time.sleep(1)
driver.find_element(By.ID,"loginPassword").send_keys("990902")
time.sleep(1)
driver.find_element(By.ID,"loginPasswordRe").send_keys("990902")
time.sleep(1)
driver.find_element(By.XPATH, "//button[@value='provider']").click()
time.sleep(2)
driver.find_element(By.XPATH, "//button[text()='Sign up']").click()
time.sleep(3)
driver.find_element(By.XPATH, "//button[text()='Log In']").click()
time.sleep(3)
driver.find_element(By.ID,"email").send_keys("virat123@gmail.com")
time.sleep(1)
driver.find_element(By.ID,"password").send_keys("990902")
time.sleep(1)
driver.find_element(By.XPATH, "//button[text()='Login']").click()
time.sleep(3)
driver.find_element(By.XPATH, "//label[contains(text(), 'My Space')]").click()
time.sleep(3)
driver.find_element(By.ID,"1").send_keys("Bliss Aqua World Resort, Mehsana, Gujarat")
time.sleep(1)
driver.find_element(By.XPATH, "//label[contains(text(), 'Total Slots for 4 weelers')]/following::input[@type='number' and @id='2']").send_keys("90")
time.sleep(1)
driver.find_element(By.XPATH, "//label[contains(text(), 'Occupied Slots')]/following::input[@type='number' and @id='2']").send_keys("77")
time.sleep(1)
driver.find_element(By.XPATH, "//label[contains(text(), 'Cost per Slot/day')]/following::input[@type='number' and @id='2']").send_keys("40")
time.sleep(1)
driver.find_element(By.XPATH, "//label[contains(text(), 'Total Slots for 2 weelers')]/following::input[@type='number' and @id='2']").send_keys("150")
time.sleep(1)
driver.find_element(By.XPATH, "(//label[contains(text(), 'Total Slots for 2 weelers')]/following::input[@type='number' and @id='2'])[2]").send_keys("98")
time.sleep(1)
driver.find_element(By.XPATH, "(//label[contains(text(), 'Total Slots for 2 weelers')]/following-sibling::*[1]/following::input[@type='number' and @id='2'])[2]").send_keys("10")
time.sleep(2)
driver.find_element(By.XPATH, "//button[contains(text(), 'Submit')]").click()
time.sleep(5)
driver.find_element(By.XPATH, "//button[contains(text(), 'Logout')]").click()
time.sleep(5)

# ### user

driver.find_element(By.XPATH, "//button[text()='Sign Up']").click()
time.sleep(5) 
driver.find_element(By.ID,"LoginEmail").send_keys("abhyudaya@gmail.com")
time.sleep(1)
driver.find_element(By.ID,"name").send_keys("Abhyudaya Tomar")
time.sleep(1)
driver.find_element(By.ID,"loginPassword").send_keys("505050")
time.sleep(1)
driver.find_element(By.ID,"loginPasswordRe").send_keys("505050")
time.sleep(1)
driver.find_element(By.XPATH, "//button[@value='user']").click()
time.sleep(2)
driver.find_element(By.XPATH, "//button[text()='Sign up']").click()
time.sleep(3)
driver.find_element(By.XPATH, "//button[text()='Log In']").click()
time.sleep(3)
driver.find_element(By.ID,"email").send_keys("abhyudaya@gmail.com")
time.sleep(1)
driver.find_element(By.ID,"password").send_keys("505050")
time.sleep(1)
driver.find_element(By.XPATH, "//button[text()='Login']").click()
time.sleep(3)
driver.find_element(By.XPATH, "//label[contains(text(), 'New Ticket')]").click()
time.sleep(3)
driver.find_element(By.ID,"querry").send_keys("Bliss Aqua World Resort, Mehsana, Gujarat")
time.sleep(3)
driver.find_element(By.XPATH, "//button[contains(text(), 'Select')]").click()
time.sleep(2)
driver.find_element(By.ID,"name").send_keys("Audi R8")
time.sleep(2)
driver.find_element(By.ID,"number").send_keys("GJ01KX1177")
time.sleep(3)
driver.find_element(By.XPATH, "//button[contains(text(), 'Pay')]").click()
time.sleep(4)
driver.find_element(By.XPATH, "//button[contains(text(), 'Book My slot')]").click()
time.sleep(3)
driver.find_element(By.XPATH, "//label[contains(text(), 'My Ticket')]").click()
time.sleep(3)
driver.find_element(By.XPATH, "//button[contains(text(), 'Logout')]").click()
time.sleep(5)


driver.quit()

