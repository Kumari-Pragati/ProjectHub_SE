from selenium import webdriver

# Initialize the web driver
driver = webdriver.Chrome()

# Test test-creation functionality
def test_add_test():
    driver.get("http://127.0.0.1:5500/Version%201/tests.html")
    assert "Tests and Quizzes" in driver.title

    # Open add test page
    add_test_button = driver.find_element_by_id("addTestBtn")
    add_test_button.click()

    # Fill test details
    test_name_input = driver.find_element_by_id("testName")
    test_name_input.send_keys("Test Test")

    # Add questions dynamically
    add_question_button = driver.find_element_by_id("addQuestionBtn")
    add_question_button.click()
    question_inputs = driver.find_elements_by_xpath("//input[contains(@id, 'question')]")
    for input in question_inputs:
        input.send_keys("Sample Question")

    # Submit the form
    submit_button = driver.find_element_by_xpath("//form[@id='addTestForm']//button[@type='submit']")
    submit_button.click()

    # Verify test is added
    test_list = driver.find_element_by_id("testList")
    assert "Test Test" in test_list.text

# Run the test function
test_add_test()

# Close the browser
driver.close()
