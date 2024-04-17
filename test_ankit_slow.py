import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service

def click_with_delay(element):
    element.click()
    time.sleep(2)
    

def test_ankit_slow():
    service = Service(r"D:\4th Sem Academics\software engineering\selenium\practise\msedgedriver.exe")
    driver = webdriver.Edge(service=service)
    driver.get("http://127.0.0.1:5500/jaideep/index.html")
    driver.set_window_size(1296, 688)
    
    click_with_delay(driver.find_element(By.CSS_SELECTOR, "a > img"))
    
    click_with_delay(driver.find_element(By.LINK_TEXT, "Buy Now"))
    
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(1) > p"))
    driver.find_element(By.ID, "card-holder-name").click()
    time.sleep(1)
    driver.find_element(By.ID, "card-holder-name").send_keys("Ajaydeep Rawat")
    time.sleep(1)
    driver.find_element(By.ID, "card-number").click()
    time.sleep(1)
    driver.find_element(By.ID, "card-number").send_keys("123456789")
    time.sleep(1)
    driver.find_element(By.ID, "expiry-date").click()
    time.sleep(1)
    driver.find_element(By.ID, "expiry-date").send_keys("12/2024")
    time.sleep(1)
    driver.find_element(By.ID, "cvv").click()
    time.sleep(1)
    driver.find_element(By.ID, "cvv").send_keys("1234")
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, "input:nth-child(5)").click()
    time.sleep(2)
    
    driver.find_element(By.ID, "card-number").click()
    time.sleep(1)
    driver.find_element(By.ID, "card-number").send_keys("1234567891111111")
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, "input:nth-child(5)").click()
    time.sleep(2)
    
    driver.find_element(By.ID, "cvv").click()
    time.sleep(1)
    driver.find_element(By.ID, "cvv").send_keys("123")
    time.sleep(1)
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".btn"))
    time.sleep(1)
    
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(2) > p"))
    time.sleep(1)
    driver.find_element(By.ID, "bank").click()
    time.sleep(1)
    dropdown = driver.find_element(By.ID, "bank")
    time.sleep(1)
    dropdown.find_element(By.XPATH, "//option[. = 'Bank of Baroda']").click()
    time.sleep(1)
    driver.find_element(By.ID, "username").click()
    time.sleep(1)
    driver.find_element(By.ID, "username").send_keys("Jaideep Jaiswal")
    time.sleep(1)
    driver.find_element(By.ID, "password").click()
    time.sleep(1)
    driver.find_element(By.ID, "password").send_keys("Dextro@789")
    time.sleep(1)
    driver.find_element(By.ID, "otp").click()
    time.sleep(1)
    driver.find_element(By.ID, "otp").send_keys("1234")
    time.sleep(1)
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".btn"))
    
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(3)"))
    driver.find_element(By.ID, "upi-id").click()
    time.sleep(1)
    driver.find_element(By.ID, "upi-id").send_keys("AnkitGautam@oksbi")
    time.sleep(1)
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".btn"))
    
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".payment-method:nth-child(4)"))
    driver.find_element(By.ID, "wallet").click()
    time.sleep(1)
    dropdown = driver.find_element(By.ID, "wallet")
    time.sleep(1)
    dropdown.find_element(By.XPATH, "//option[. = 'Venmo']").click()
    time.sleep(1)
    driver.find_element(By.ID, "wallet-username").click()
    time.sleep(1)
    driver.find_element(By.ID, "wallet-username").send_keys("ayushgupta.venmo")
    time.sleep(1)
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".btn"))
    
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".btn"))
    click_with_delay(driver.find_element(By.CSS_SELECTOR, ".btn-secondary"))
    
    driver.close()


if __name__ == "__main__":
    pytest.main([__file__])
