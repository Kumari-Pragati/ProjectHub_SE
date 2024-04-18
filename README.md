# Voting System Project
This project is a voting system that allows users to cast votes for candidates in a school or university election.

## Features of Advanced Online Voting System in PHP and MySQL

Our advanced online voting system comes with a range of features to ensure a smooth voting experience:

- **Vote Preview**: Users can preview their votes before submission.
- **Multiple Votes**: Support for multiple voting options.
- **Result Tally via Horizontal Barchart**: Visual representation of voting results.
- **Print Voting Result in PDF**: Option to print voting results for documentation.
- **Changeable Order of Positions**: Flexibility in displaying positions on the ballot.
- **CRUD Operations for Voters, Candidates, and Positions**: Easy management of voter, candidate, and position data.

# Project_Setup
To run this project, you must have XAMPP installed on your PC. Follow these steps after starting Apache and MySQL in XAMPP:

1. Copy the main project folder and paste it in the `xampp/htdocs/` directory.

2. Open a browser and go to URL `http://localhost/phpmyadmin/`.

3. Click on the "Databases" tab.

4. Create a database named `votingsystem`.

5. Click on the "Import" tab.

6. Click on "Browse file" and select the `votingsystem.sql` file located inside the project's `db` folder.

7. Click on the "Go" button to import the database.

8. Open a browser and go to URL `http://localhost/votesystem/admin/`.

9. Log in using the following admin credentials:
   - Username: `shakti`
   - Password: `password`

10. After logging in, click on the "Voters" tab and add a new voter. Fill in the required details.

11. Copy the voter ID of the newly created voter from the voter list.

12. Log out from the admin page and go to URL `http://localhost/votesystem/index.php`.

13. Log in using the copied voter ID and password.

14. You can now choose the candidates for the election and cast your vote. The election is created in the admin page.

## Additional Notes

- Make sure to have XAMPP installed with Apache and MySQL running before following the setup steps.
- Store your project files in the `xampp/htdocs/` directory for the web server to access them.
- The database can be managed through phpMyAdmin, which is accessible at `http://localhost/phpmyadmin/`.

# Group Members
- Varad Vyavhare: 202251160
- Swati Patel: 202251139
- Rishabh Ahlawat: 202251111
- Priyal Mangal: 202252332
- Shakti Pratap Singh: 202251128   



