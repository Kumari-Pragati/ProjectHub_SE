import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service

def test_amazon1_jaideep():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    driver.find_element(By.NAME, "search").click()
    time.sleep(1)
    driver.find_element(By.NAME, "search").send_keys("Laptop")
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, ".ml-2").click()
    time.sleep(1)
    driver.find_element(By.ID, "navbarDropdown").click()
    time.sleep(1)
    driver.find_element(By.LINK_TEXT, "Recommended Products").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-secondary").click()
    time.sleep(2)
    
    driver.find_element(By.LINK_TEXT, "Profile").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-go-back").click()
    time.sleep(2)
    
    driver.find_element(By.LINK_TEXT, "Cart").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".go-back-button > button").click()
    time.sleep(2)
    
    driver.find_element(By.LINK_TEXT, "Login").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-secondary").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, "a > img").click()
    time.sleep(2)
    
    driver.find_element(By.LINK_TEXT, "Buy Now").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(1) > p").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(2) > p").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(3) > img").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(4) > p").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-secondary").click()
    time.sleep(2)
    
    driver.close()

# Run the test
if __name__ == "__main__":
    pytest.main([__file__])
