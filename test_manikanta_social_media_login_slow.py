import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service

def test_manikanta_social_media_login():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    driver.find_element(By.LINK_TEXT, "Login").click()
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, ".loginBtn--google > img").click()
    time.sleep(1)
    driver.find_element(By.NAME, "username").click()
    time.sleep(1)
    driver.find_element(By.NAME, "username").send_keys("Manikanta")
    time.sleep(1)
    driver.find_element(By.NAME, "email").click()
    time.sleep(1)
    driver.find_element(By.NAME, "email").send_keys("manikanta@gmail.com")
    time.sleep(1)
    driver.find_element(By.NAME, "password").click()
    time.sleep(1)
    driver.find_element(By.NAME, "password").send_keys("12345")
    time.sleep(1)
    driver.find_element(By.NAME, "confirm_password").click()
    time.sleep(1)
    driver.find_element(By.NAME, "confirm_password").send_keys("12345")
    time.sleep(1)
    driver.find_element(By.LINK_TEXT, "Back").click()
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, ".loginBtn--facebook").click()
    time.sleep(1)
    driver.find_element(By.NAME, "username").click()
    time.sleep(1)
    driver.find_element(By.NAME, "username").send_keys("Manikanta")
    time.sleep(1)
    driver.find_element(By.NAME, "password").click()
    time.sleep(1)
    driver.find_element(By.NAME, "password").send_keys("12345")
    time.sleep(1)
    driver.find_element(By.NAME, "confirm_password").click()
    time.sleep(1)
    driver.find_element(By.NAME, "confirm_password").send_keys("12345")
    time.sleep(1)
    driver.find_element(By.LINK_TEXT, "Back").click()
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, ".btn-secondary").click()
    time.sleep(2)
    
    driver.close()

# Run the test
if __name__ == "__main__":
    pytest.main([__file__])
