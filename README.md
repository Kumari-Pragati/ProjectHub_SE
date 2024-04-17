# Stock Market Dashboard Project

## Overview

This project is a comprehensive stock market dashboard that allows users to sign up, log in, and access a personalized dashboard where they can view stock market data and buy/sell stocks using a provided API.

## Features

- **User Authentication**: Users can sign up for a new account or log in to an existing one securely.
- **Dashboard**: Upon logging in, users are greeted with a personalized dashboard displaying relevant stock market information.
- **Stock Data**: Real-time stock market data is fetched from an API and displayed on the dashboard.
- **Buying and Selling**: Users can buy and sell stocks directly from the dashboard interface.
- **Portfolio Management**: Users can view their portfolio, including current holdings and their respective values.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: https://finnhub.io , https://www.tiingo.com/

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PrajasW/ProjectHub_SE.git

2. **Navigate to the project directory:**

    ```bash
    cd ProjectHub_SE
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Run the application:**

    ```bash
    npm run start
    ```

5. **Access the application in your browser at** `http://localhost:3000`.

## Usage

1. Sign up for a new account or log in with existing credentials.
2. Explore the dashboard to view stock market data.
3. Buy and sell stocks as desired.
4. Monitor your portfolio and track your investments.

## Testing

We have done testing using both Selenium IDE and Selenium web-driver.

### Selenium IDE
We have tested logging in the user, buying two different stocks, after which we checked and verified the changes in user portfolio.

test is located in `testing/ide-test`

### Selenium Web-driver
We have written python scripts using selenium webdriver library, using the chrome browser to test we tested the following:

1. Register new user and log-in `testing/register-test.py`
2. Login the user and buy new stock `testing/stock-buy-test`


## Acknowledgements

Special thanks to our instructor, Professor Novarun Deb, for their support and guidance throughout the development process. We are also grateful to our lab TA, Pragati Kumari, for her assistance.

### Team: Submission Virtual Trading Application

- Ajani Smit (202251006)
- Dhwanan Bharadva (202251028)
- Gogri Siddharth (202251051)
- Het Lathiya (202251054)
- Prajas Wadekar (202251098)
