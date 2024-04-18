from selenium import webdriver
import time
from selenium.webdriver.common.by import By

# Set up WebDriver
driver = webdriver.Chrome()  # You can change this to the WebDriver of your choice

# Open the webpage
driver.get("http://localhost:3000")  # Replace this with the URL of your React app

try:
    # Find the file input element
    file_input = driver.find_element(By.CSS_SELECTOR, "input[type='file']")

    # Provide the path to the file to upload
    file_path = "D:\\academics\\sem-4\\SE\\project\\git\\ediToXML\\ediText.txt"

    # Upload the file
    file_input.send_keys(file_path)

    # Wait for the upload to complete (you can adjust the time as needed)
    time.sleep(5)

    # Find the upload button and click it
    upload_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    upload_button.click()

    # Wait for the upload process to finish (you may need to adjust this time)
    time.sleep(5)

    # Check if the message after upload is displayed
    message = driver.find_element(By.CSS_SELECTOR, "p").text
    print("Upload message:", message)

finally:
    # Close the browser window
    driver.quit()