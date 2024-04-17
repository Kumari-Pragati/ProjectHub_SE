# Expense Tracker Website



### Our project expense tracking website uses XAMPP local server and PHP language. So, before running the test cases infantilizing XAMPP is mandatory. The following test cases run on username: vijay , password:1234. So, could you sign up before running the test cases?

## Here is the database to connect with xampp server -->

create table users(
	id int auto_increment primary key,
	user_name varchar(255),
	user_password varchar(255)
);

CREATE TABLE expenses (
    id INT,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    description VARCHAR(255),
    mode_of_payment varchar(255),
    expense_category varchar(255),
    foreign key (id) references users(id)
);


insert into users()
values
(Null,'vijay' , '1234'),
(null,'gopi' , '8080'),
(null,'sashidhar' , '1234');

INSERT INTO expenses (id, amount, date, description, mode_of_payment, expense_category) VALUES
(1, 50.00, '2024-04-01', 'Groceries', 'Credit Card', 'Food'),
(1, 30.00, '2024-04-03', 'Dinner with friends', 'Cash', 'Entertainment'),
(2, 100.00, '2024-04-02', 'Utilities', 'Debit Card', 'Bills'),
(2, 20.00, '2024-04-05', 'Coffee', 'Cash', 'Food'),
(3, 200.00, '2024-04-01', 'Monthly rent', 'Bank Transfer', 'Housing');

## Key Features:

### Expense Management: 
Users can effortlessly add expenses associated with specific categories or items. Each expense entry includes details like the amount, date, and a brief description.
### Category Repository: 
The platform offers a centralized repository for expense categories. Users can create custom categories to better organize their expenses, making it easily accessible and understandable.
### User Dashboard: 
Users can view a summary of their expenses, categorized spending, and budget status on their personalized dashboard.
### Expense Tracking:  
individual users have access to expense tracking tools, allowing them to monitor their spending, savings, and overall financial health. This feature enables users to make informed financial decisions.


# Testing with Selenium:

### Login Test: 
Automated tests were developed to verify that User can login sucessfully.

### Add expense test: 
Test scripts were created to ensure that User can upload their daily expenses  with various types of features , such as amount,Date, type of payment , and description to the platform.

### View expense test: 
Automated tests were executed to confirm that enrolled Users can access and view their daily expences associated with their enrolled account.


# OUR Team

PALAPALA SASIDHAR REDDY - 202211062

PANKAJ KUMAR - 202211064

PARSANIA HERRY MANHARBHAI - 202211065

SIVA NAGA GOPINADH JALLIPALLI -202211082

VIJAY MALVIYA - 202111088