import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service

def test_deewakar():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    driver.find_element(By.LINK_TEXT, "Recommended Products").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".btn-secondary").click()
    time.sleep(2)
    
    driver.find_element(By.LINK_TEXT, "Cart").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".product-item:nth-child(2) > .delete-button > button").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".product-item:nth-child(2) > .buy-now-button > button").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".product-item:nth-child(3) > .delete-button").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".product-item:nth-child(3) > .buy-now-button > button").click()
    time.sleep(2)
    
    driver.find_element(By.CSS_SELECTOR, ".go-back-button > button").click()
    time.sleep(2)
    
    driver.close()

# Run the test
if __name__ == "__main__":
    pytest.main([__file__])
