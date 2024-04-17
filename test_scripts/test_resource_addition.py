from selenium import webdriver

# Initialize the web driver
driver = webdriver.Chrome()

# Test resource addition functionality
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

# Run the test function
test_add_resource()

# Close the browser
driver.close()
