from selenium import webdriver

# Initialize the web driver
driver = webdriver.Chrome()

# Test registration functionality
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

# Run the test function
test_registration()

# Close the browser
driver.close()
