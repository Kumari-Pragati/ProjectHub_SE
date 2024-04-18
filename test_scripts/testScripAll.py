from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the web driver
driver = webdriver.Chrome()

# Test navigation links
def test_navigation():
    driver.get("http://127.0.0.1:5500/Version%201/index.html")
    assert "Online Learning Platform" in driver.title
    
    # Test Courses link
    courses_link = driver.find_element_by_xpath("//a[contains(text(),'Courses')]")
    courses_link.click()
    assert "Courses" in driver.title

    # Test Tests link
    tests_link = driver.find_element_by_xpath("//a[contains(text(),'Tests')]")
    tests_link.click()
    assert "Tests and Quizzes" in driver.title

    # Test Progress link
    progress_link = driver.find_element_by_xpath("//a[contains(text(),'Progress')]")
    progress_link.click()
    assert "Progress" in driver.title

    # Test Login link
    login_link = driver.find_element_by_xpath("//a[contains(text(),'Login')]")
    login_link.click()
    assert "Login" in driver.title

# Test user registration
def test_registration():
    driver.get("http://127.0.0.1:5500/Version%201/login.html")
    assert "Login" in driver.title

    # Switch to registration page
    registration_link = driver.find_element_by_xpath("//a[contains(text(),'Register')]")
    registration_link.click()
    assert "Registration" in driver.title

    # Fill registration form
    username_input = driver.find_element_by_id("username")
    username_input.send_keys("testuser")

    email_input = driver.find_element_by_id("email")
    email_input.send_keys("test@example.com")

    password_input = driver.find_element_by_id("password")
    password_input.send_keys("testpassword")

    confirm_password_input = driver.find_element_by_id("confirm_password")
    confirm_password_input.send_keys("testpassword")

    # Submit registration form
    submit_button = driver.find_element_by_xpath("//button[@type='submit']")
    submit_button.click()

    # Verify successful registration
    assert "Login" in driver.title

# Test adding a new course
def test_add_course():
    driver.get("http://127.0.0.1:5500/Version%201/courses.html")
    assert "Courses" in driver.title

    # Open add course modal
    add_course_button = driver.find_element_by_id("addCourseBtn")
    add_course_button.click()

    # Fill course details
    course_name_input = driver.find_element_by_id("courseName")
    course_name_input.send_keys("Test Course")

    course_description_input = driver.find_element_by_id("courseDescription")
    course_description_input.send_keys("This is a test course.")

    # Submit the form
    submit_button = driver.find_element_by_xpath("//form[@id='addCourseForm']//button[@type='submit']")
    submit_button.click()

    # Verify course is added
    course_list = driver.find_element_by_id("courseList")
    assert "Test Course" in course_list.text

# Test creating a new test
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

# Test adding a new resource
def test_add_resource():
    driver.get("http://127.0.0.1:5500/Version%201/courses.html")
    assert "Courses" in driver.title

    # Open add resource modal
    add_resource_button = driver.find_element_by_id("addResourceBtn")
    add_resource_button.click()

    # Fill resource details
    resource_name_input = driver.find_element_by_id("resourceName")
    resource_name_input.send_keys("Test Resource")

    resource_link_input = driver.find_element_by_id("resourceLink")
    resource_link_input.send_keys("http://example.com")

    # Submit the form
    submit_button = driver.find_element_by_xpath("//form[@id='addResourceForm']//button[@type='submit']")
    submit_button.click()

    # Verify resource is added
    resource_list = driver.find_element_by_id("resourceList")
    assert "Test Resource" in resource_list.text

# Test taking a test
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

# Run all test functions
test_navigation()
test_registration()
test_add_course()
test_add_test()
test_add_resource()
test_take_test()

# Close the browser
driver.close()
