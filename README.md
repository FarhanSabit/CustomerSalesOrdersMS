# Bookshop Backend

This is a backend service for a management system that manages customers (register, view, update) & sales/orders from the customers (create, view, update). It allows users to view, register, and update book details, as well as buy books while tracking stock availability. The project uses **Node.js** for the backend and **Redis** (with RedisJSON) for storing and managing book data and stock availability.

## Features

- **Book Registration**: Add new books with details like title, author, price, and stock.
- **Book Read**: Users can search book.
- **Stock Management**: Track the stock availability of books.
- **Buy Books**: Users can purchase books, which reduces stock when successful.
- **Redis for Data Storage**: Utilizes Redis in-memory database with RedisJSON for handling JSON data storage efficiently.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend service.
- **Redis**: In-memory database used for storing book details and stock availability.
- **RedisJSON**: Redis module for handling JSON data (book details).
- **Express.js**: Web framework for building RESTful APIs.
- **Docker** (Optional): For running Redis with RedisJSON in a containerized environment.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14 or later)
- **Redis** (with RedisJSON module)
- **Docker** (optional, if using Docker to run Redis)
- **Postman** (optional, for API testing)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/bookshop-backend.git
   cd bookshop-backend
Install Dependencies:

Install the required Node.js packages:

 ```bash
npm install
 ```
Set Up Environment Variables:

Create a .env file in the root of the project and add the following variables:

```bash
PORT=3000
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET_KEY=your_jwt_secret_key
```
Run Redis (with RedisJSON):
If you're using Docker to run RedisJSON, you can start Redis with:

```bash
docker run -d --name redis -p 6379:6379 redislabs/rejson:latest
```
If you're using WSL or a native Redis installation, ensure Redis and RedisJSON are running on localhost:6379.

Start the Application:

To start the application, run the following command:

```bash
npm start
```
The backend service should now be running on http://localhost:3000.

API Endpoints
1. Get All Books
Endpoint: GET /api/books

Description: Fetch a list of all books available in the store.

Response:

```json
[
  {
    "id": 1,
    "title": "Book Title",
    "author": "Author Name",
    "price": 19.99,
    "stock": 100
  }
]
```
2. Get Book by ID
Endpoint: GET /api/books/:id

Description: Fetch a book by its ID.

Parameters:

id: Book ID (integer)
Response:

```json
{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name",
  "price": 19.99,
  "stock": 100
}
```
3. Register a New Book
Endpoint: POST /api/books

Description: Add a new book to the store.

Request Body:

```json
{
  "title": "New Book Title",
  "author": "New Author",
  "price": 25.99,
  "stock": 50
}
```
Response:

```json
{
  "message": "Book registered successfully!"
}
```
4. Update Book Details
Endpoint: PUT /api/books/:id

Description: Update the details of a book.

Parameters:

id: Book ID (integer)
Request Body:

```json
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "price": 29.99,
  "stock": 45
}
```
Response:

```json
{
  "message": "Book details updated successfully!"
}
```
5. Buy a Book
Endpoint: POST /api/books/buy/:id

Description: Buy a book and reduce its stock by 1.

Parameters:

id: Book ID (integer)
Response:

```json
{
  "message": "Book purchased successfully!",
  "remainingStock": 49
}
```
Testing the API
You can test the API using Postman or any other API testing tool:
```
GET /api/books to retrieve all books.
GET /api/books/:id to retrieve a specific book by ID.
POST /api/books to add a new book.
PUT /api/books/:id to update book details.
POST /api/books/buy/:id to simulate buying a book.
```
Error Handling
If an error occurs during an API request, you will receive a JSON response with an error field:

```json
{
  "error": "Error message"
}
```
