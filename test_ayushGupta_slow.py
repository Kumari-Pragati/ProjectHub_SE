import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service

def test_ayush_gupta():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    driver.find_element(By.LINK_TEXT, "Profile").click()
    time.sleep(1)
    
    driver.find_element(By.LINK_TEXT, "Order History").click()
    time.sleep(1)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-go-back").click()
    time.sleep(1)
    
    driver.find_element(By.LINK_TEXT, "Shipping Addresses").click()
    time.sleep(1)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-go-back").click()
    time.sleep(1)
    
    driver.find_element(By.LINK_TEXT, "Change Password").click()
    time.sleep(1)
    
    driver.find_element(By.NAME, "oldPassword").click()
    driver.find_element(By.NAME, "oldPassword").send_keys("qwertyasd")
    driver.find_element(By.NAME, "newPassword").click()
    driver.find_element(By.NAME, "newPassword").send_keys("Dextro@789")
    driver.find_element(By.NAME, "confirmNewPassword").click()
    driver.find_element(By.NAME, "confirmNewPassword").send_keys("Dextro@789")
    time.sleep(1)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-go-back").click()
    time.sleep(1)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-go-back").click()
    time.sleep(1)
    
    driver.close()

# Run the test
if __name__ == "__main__":
    pytest.main([__file__])
