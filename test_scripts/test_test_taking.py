from selenium import webdriver

# Initialize the web driver
driver = webdriver.Chrome()

# Test test taking functionality
def test_take_test():
    driver.get("http://127.0.0.1:5500/Version%201/tests.html")
    assert "Tests and Quizzes" in driver.title

    # Click on a test to take
    take_test_button = driver.find_element_by_xpath("//button[contains(text(),'Take Test')]")
    take_test_button.click()

    # Answer questions
    answer_inputs = driver.find_elements_by_xpath("//input[@type='radio']")
    for input in answer_inputs:
        input.click()

    # Submit the test
    submit_button = driver.find_element_by_xpath("//button[contains(text(),'Submit')]")
    submit_button.click()

    # Verify test submission
    result_message = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//div[contains(@class,'result-message')]"))
    )
    assert "Test submitted successfully!" in result_message.text

# Run the test function
test_take_test()

# Close the browser
driver.close()
