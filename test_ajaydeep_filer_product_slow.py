import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service

def test_ajaydeep_filter_product_slow():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    driver.find_element(By.LINK_TEXT, "Filter Products").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(2)").click()
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, ".btn:nth-child(3)").click()
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, "#filters > .btn:nth-child(4)").click()
    time.sleep(2)
    driver.find_element(By.LINK_TEXT, "Back").click()
    
    driver.close()

# Run the test
if __name__ == "__main__":
    pytest.main([__file__])
