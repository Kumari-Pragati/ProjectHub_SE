# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities


class TestTest02():
    def setup_method(self, method):
        self.driver = webdriver.Chrome()
        self.vars = {}

    def teardown_method(self, method):
        self.driver.quit()

    def test_test02(self):
        self.driver.get("http://127.0.0.1:5500/")
        self.driver.set_window_size(1552, 832)
        self.driver.find_element(By.LINK_TEXT, "Login").click()
        self.driver.find_element(By.ID, "email").send_keys(
            "sudhanshuranjan714@gmail.com")
        self.driver.find_element(By.ID, "password").send_keys("Gmail#1234")
        self.driver.find_element(By.ID, "email").click()
        self.driver.find_element(By.CSS_SELECTOR, ".btn").click()
        self.driver.find_element(By.ID, "name").click()
        self.driver.find_element(By.ID, "name").send_keys("Sudhanshu Ranjan")
        self.driver.find_element(
            By.CSS_SELECTOR, ".form-group:nth-child(2) > #name").send_keys("202251135@iiitvadodara.ac.in")
        self.driver.find_element(
            By.CSS_SELECTOR, ".form-group:nth-child(3) > #name").send_keys("07340427460")
        self.driver.find_element(By.ID, "Message").click()
        self.driver.find_element(By.ID, "Message").click()
        self.driver.find_element(By.ID, "Message").send_keys(
            "I want to have hair coloring")
        self.driver.find_element(By.CSS_SELECTOR, ".email-field").click()
        self.driver.find_element(By.CSS_SELECTOR, ".email-field").click()
        self.driver.find_element(
            By.CSS_SELECTOR, ".email-field").send_keys("darsh@gmail.com")
        self.driver.find_element(
            By.CSS_SELECTOR, ".btn:nth-child(2) > .span").click()
