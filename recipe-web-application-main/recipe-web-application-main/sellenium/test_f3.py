import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestF3():
    def setup_method(self, method):
        self.driver = webdriver.Chrome()
        self.vars = {}

    def teardown_method(self, method):
        self.driver.quit()

    def test_f3(self):
        self.driver.get("http://localhost:5173/")
        self.driver.set_window_size(1296, 688)

        
        recipe_card = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".recipe-card:nth-child(3) .author-and-link"))
        )
        recipe_card.click()

        
        link_within_recipe_card = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".recipe-card:nth-child(3) .link > p"))
        )
        link_within_recipe_card.click()

        
        back_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, ".back-button > img"))
        )
        back_button.click()

if __name__ == "__main__":
    pytest.main()
