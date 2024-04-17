import pytest
from time import sleep
import json
from selenium import webdriver
from selenium.webdriver.common.by import By

def get_driver():
    driver = webdriver.Chrome()
    driver.get("http://localhost:5173/")
    driver.set_window_size(1552, 832)
    driver.find_element(By.CSS_SELECTOR, ".bg-gray-300").click()
    driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(1)").click()
    driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(1)").send_keys("admin")
    driver.find_element(By.CSS_SELECTOR, ".bg-gray-200:nth-child(2)").send_keys("admin")
    driver.find_element(By.CSS_SELECTOR, ".text-1\\.5xl").click()
    driver.find_element(By.CSS_SELECTOR, ".flex:nth-child(1) > .flex > .flex:nth-child(1)").click()
    driver.find_element(By.CSS_SELECTOR, ".flex:nth-child(1) > .flex > .flex:nth-child(1)").send_keys("user")
    driver.find_element(By.CSS_SELECTOR, ".flex:nth-child(1) > .flex > .font-bold:nth-child(2)").click()
    driver.find_element(By.XPATH,"//*[@id='root']/div/div[2]/div[1]/div[2]/div[1]/input").click()
    driver.find_element(By.CSS_SELECTOR, ".flex:nth-child(2) > .flex:nth-child(2) > .flex").send_keys("A First Course in Artificial Intelligence")
    driver.find_element(By.CSS_SELECTOR, ".flex:nth-child(2) > .flex > .font-bold:nth-child(2)").click()
    return driver

driver = get_driver()
