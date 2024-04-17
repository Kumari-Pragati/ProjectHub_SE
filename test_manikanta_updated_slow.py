import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service

def click_with_delay(element):
    element.click()
    time.sleep(2)

def test_manikanta_updated():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    click_with_delay(driver.find_element(By.LINK_TEXT, "Login"))
    click_with_delay(driver.find_element(By.ID, "Email Address"))
    driver.find_element(By.ID, "Email Address").send_keys("Manikanta@gmail.com")
    click_with_delay(driver.find_element(By.ID, "password"))
    driver.find_element(By.ID, "password").send_keys("12345")
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".btn-secondary"))
    
    driver.close()

# Run the test
if __name__ == "__main__":
    pytest.main([__file__])
