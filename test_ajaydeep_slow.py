import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.edge.service import Service

def test_ajaydeep_slow():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    driver.find_element(By.CSS_SELECTOR, "a > img").click()
    time.sleep(2)
    
    image_selector = Select(driver.find_element(By.ID, "imageSelector"))
    image_selector.select_by_visible_text('Side Image')
    time.sleep(1)
    image_selector.select_by_visible_text('Back Image')
    time.sleep(1)
    
    driver.find_element(By.LINK_TEXT, "Buy Now").click()
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, ".btn").click()
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, ".btn-secondary").click()
    
    time.sleep(2)
    
    driver.quit()

if __name__ == "__main__":
    pytest.main([__file__])
