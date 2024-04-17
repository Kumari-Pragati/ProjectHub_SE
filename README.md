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
   git clone https://github.com/your_username/stock-market-dashboard.git

2. **Navigate to the project directory:**

    ```bash
    cd stock-market-dashboard
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    - Create a `.env` file in the root directory.
    - Add the following environment variables:

        ```plaintext
        PORT=3000
        DB_URI=<your_mongodb_connection_string>
        API_KEY=<your_api_key>
        ```

5. **Run the application:**

    ```bash
    npm start
    ```

6. **Access the application in your browser at** `http://localhost:3000`.

## Usage

1. Sign up for a new account or log in with existing credentials.
2. Explore the dashboard to view stock market data.
3. Buy and sell stocks as desired.
4. Monitor your portfolio and track your investments.

## Credits

- API Provider: for providing real-time stock market data.

## Acknowledgements

Special thanks to our instructor, Professor Novarun Deb, for their support and guidance throughout the development process. We are also grateful to our lab TA, Pragati Kumari, for her assistance.

### Team: Submission Virtual Trading Application

- Ajani Smit (202251006)
- Dhwanan Bharadva (202251028)
- Gogri Siddharth (202251051)
- Het Lathiya (202251054)
- Prajas Wadekar (202251098)
