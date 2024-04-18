from selenium import webdriver

# Initialize the web driver
driver = webdriver.Chrome()

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

# Run the test function
test_add_course()

# Close the browser
driver.close()
