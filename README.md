# Question Paper Generator

This is a question paper generator web application built using the following technologies:

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **Next Auth/AuthJS**: For authentication and authorization features.
- **TypeScript**: For type safety and improved developer experience.
- **CockroachDB**: A distributed SQL database for storing question papers and related data.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Axios**: A promise-based HTTP client for making requests to the server.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Shadcn UI Library**: A UI library for building interactive and responsive user interfaces.

## Features

- User authentication and authorization.
- CRUD operations for managing question papers.
- Form validation using Zod.
- Responsive UI design with Tailwind CSS.

## Getting Started

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Other instructions

1. You can only login using institute Google Account. So make sure that you even run the selenium testing in a browser with your Google account set as Primary.
2. To open the admin dashboard go to the route `/admin/dashboard` after logging into the application.
3. Add at least 3 questions from your own institute email ID before testing.

## Selenium Testcases

1. Previews the User Sidebar
2. Add a Subject to the DB
3. Edit a Question created by yourself.
4. Delete a Question Created by yourself.
5. Preview Admin Sidebar, with Dashboard, User Status and Verification portal.


Please find the orignal repository link : [GitHub]("https://github.com/Room1097/question-paper-generator")