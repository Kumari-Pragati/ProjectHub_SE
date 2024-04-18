from selenium import webdriver
from selenium.webdriver.common.by import By  # Import the By class
import time
import random
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
options = Options()
options.add_experimental_option("detach", True)

driver = webdriver.Chrome(executable_path='tests\driver\chromedriver.exe',options=options)

# home page
driver.get("http://localhost:5173/")
driver.maximize_window()
time.sleep(5)
username="User"+str(random.randint(0,1000))

#signUp 

driver.find_element(By.XPATH,'/html/body/div/div/div[1]/div[2]/div[2]/div[2]/a/button').click()
time.sleep(2)
element=driver.find_element(By.XPATH,'/html/body/div/div/div/form/div[1]/input')
element.click()
element.send_keys('Nipur Patel')
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[2]/input")
element.click()
element.send_keys(username)
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[3]/input")
element.click()
element.send_keys(19)
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[4]/input")
element.click()
element.send_keys("nipur"+str(random.randint(0,100))+"@gmail.com")
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[5]/input")
element.click()
element.send_keys("Nipur20@")
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[6]/input")
element.click()
element.send_keys("Nipur20@")
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[7]/button[1]")
element.click()
time.sleep(2)

# Login

element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[1]/input")
element.click()
element.send_keys(username)
time.sleep(2)
element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[2]/input")
element.click()
element.send_keys("Nipur20@")
time.sleep(2)
driver.find_element(By.XPATH,"/html/body/div/div/form/div[3]/button").click()
time.sleep(2)


#landing page

element=driver.find_element(By.XPATH,"/html/body/div/div/div/div/button[1]")
element.click()
time.sleep(2)

#home registration

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[1]/input")
element.click()
element.send_keys("Shanti Virdha Ashram ")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[2]/input")
element.click()
element.send_keys("Priyadarshini Nagar")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[3]/input")
element.click()
element.send_keys("Agra, Greater Noida")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[4]/input")
element.click()
element.send_keys("Uttar Pradesh ")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[5]/input")
element.click()
element.send_keys("virdhaashram@gmail.com")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[6]/input")
element.click()
element.send_keys(9394956778)
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[7]/input")
element.click()
element.send_keys(70)
time.sleep(2)


element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[8]/label[2]/input")
element.click()
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[8]/label[3]/input")
element.click()
time.sleep(2)

# element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[9]/input")
# file_path="/assets/wt1.pdf"
# element.click()
# element.send_keys(file_path)
# time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/div[10]/textarea")
element.click()
element.send_keys("A Vridha Ashram, or Old Age Home, offers a comprehensive array of facilities and services tailored to meet the unique needs of elderly residents. These facilities typically include comfortable accommodation options, ranging from individual rooms to shared living spaces, providing a sense of privacy and community. In addition to ensuring residents' physical well-being, Vridha Ashrams prioritize their mental and emotional health through access to medical care, nutritious meals, and assistance with daily activities. Social interaction and engagement are fostered through a variety of recreational and social activities, such as yoga classes, cultural events, and outings, encouraging residents to stay active and connected. ")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div/form/button")
element.click()
time.sleep(2)

# landing page 

element=driver.find_element(By.XPATH,"/html/body/div/div/div/div/button[2]")
element.click()
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div[2]/div")
element.click()
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/div[6]/a/button")
element.click()
time.sleep(2)

#add memeber

element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[1]/input")
element.click()
element.send_keys("Gajendra Verma")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[2]/input")
element.click()
element.send_keys("gajendra@gmail.com")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[3]/input")
element.click()
element.send_keys(70)
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[4]/textarea")
element.click()
element.send_keys("123 Main Street,Springfield, IL 62701,United States")
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/form/div[5]/input")
element.click()
element.send_keys(1234567890)
time.sleep(2)

element=driver.find_element(By.XPATH,"/html/body/div/div/form/button")
element.click()
time.sleep(2)


