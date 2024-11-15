# TO-DO Backend API

This is a backend API for managing a simple To-Do list application. The API supports the core CRUD operations: Create, Read, Update, and Delete to interact with To-Do items. It is built with [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), and a simple in-memory data store (or database of your choice).

## Features

- **Create** a new To-Do item
- **Read** all To-Do items or a specific To-Do item by ID
- **Update** a To-Do item by ID
- **Delete** a To-Do item by ID
- Handle errors like missing fields or invalid IDs

## Technologies Used

- Node.js
- Express.js
-  MongoDB
**Setup and Installation**
**Prerequisites**
Node.js (version 12 or higher)
npm (Node package manager)
Steps to Run the Project Locally****
Clone the repository to your local machine:
git clone https://github.com/BALAJI-BALU7742/TO-DO-Backend.git
Navigate to the project directory:

cd TO-DO-Backend
Install the required dependencies:


npm install
Start the server:


npm start
The API will be running on http://localhost:3000.

Error Handling
400 Bad Request: If required fields are missing (e.g., title or description).
404 Not Found: If a To-Do item is not found by its ID.
500 Internal Server Error: For unexpected server errors.

