from selenium import webdriver

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

# Run the test function
test_navigation()

# Close the browser
driver.close()
