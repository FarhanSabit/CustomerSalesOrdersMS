# Customer Sales Orders Management System

This is a Customer Sales Orders Management System that allows for the management of customers and their sales orders. It includes functionality for creating, updating, and confirming orders, as well as managing customer information.

## Table of Contents
1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [API Endpoints](#api-endpoints)
5. [Testing with Postman](#testing-with-postman)
6. [Assumptions & Limitations](#assumptions--limitations)
7. [License](#license)

---

## Overview

The system provides backend services to manage customers and their sales orders. The application uses Node.js with Express, Sequelize ORM for database interactions, and MySQL as the database.

### Core Features:
- **Customer Management**: Add, update, and manage customers.
- **Sales Order Management**: Create, update, and confirm sales orders.
- **Customer Validation**: Ensure that orders are only processed for customers that are allowed to place orders.

---

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **Sequelize**: ORM for interacting with MySQL.
- **MySQL**: Relational database management system.
- **Postman**: Used for API testing.

---

## Installation

### Prerequisites:
- [Node.js](https://nodejs.org) (v14 or higher)
- [MySQL](https://www.mysql.com/downloads/) or a running instance of a MySQL database.

### Steps:
1. **Clone the repository**:
   git clone https://github.com/FarhanSabit/CustomerSalesOrdersMS.git
   cd CustomerSalesOrdersMS

2. **Install dependencies:**:
Create a .env file in the root of the project directory with the following content:

4. **Set up environment variables:**
Create a .env file in the root of the project directory with the following content:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=customer_sales_orders
PORT=3000

5. **Run the database migrations:**:
If you are using Sequelize to manage database schema, run the migrations to create the necessary tables:
npx sequelize-cli db:migrate

6. **Start the server:**:
npm start
[The application will be accessible at http://localhost:3000.]


# API Endpoints
## Customer Management:
### 1. Create Customer (POST /api/customers):
**Body:**
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "isAllowedToOrder": true
}
**Response:** Returns the created customer object.

### 2. Get All Customers (GET /api/customers):
**Response:** Returns an array of all customers.

### 3. Get Customer by ID (GET /api/customers/:id):
**Response:** Returns customer details by ID.

### 4. Update Customer Status (PATCH /api/customers/:id/status):
**Body:**
{
  "isAllowedToOrder": false
}

**Response:** Returns the updated customer object.


## Order Management:
### 1. Create Order  (POST /api/Orders ):
**Body:**
{
  "customerId": 1,
  "items": [{"product": "Product 1", "quantity": 2, "price": 50}],
  "totalAmount": 100
}
**Response:** Returns the created order object.

### 2. Get All Orders  (GET /api/Orders):
**Response:** Returns an array of all Orders.

### 3. Get Order  by ID (GET /api/Orders/:id):
**Response:** Returns Orders details by ID.

### 4. Update Order (PATCH /api/Orders/:id):
**Body:**
{
  "items": [{"product": "Updated Product", "quantity": 3, "price": 75}],
  "totalAmount": 225
}

**Response:** Returns the updated order object.

### 5. Confirm Order (PATCH/api/Orders/:id/confirm):
**Response:** Returns the updated order with status set to 'Confirmed'.

---

# Testing with Postman:
## To test the API with Postman, follow these steps:
1. **Create a new request in Postman and set the method and URL as described in the API section.**
2. **Set the request body (for POST/PUT requests) as shown in the examples above.**
    **Click Send to execute the request.**
4. **View the response to check if the operation was successful.**

---

# Assumptions & Limitations
## Assumptions:
1. The customer must be allowed to place an order (isAllowedToOrder must be true) in order to create a new order.
2. The order cannot be confirmed if the customer is disallowed from placing orders.

## Limitations:
1. The application currently only supports basic CRUD operations for customers and orders.
2. No advanced authentication or authorization has been implemented.
Error handling is basic and does not cover all edge cases (e.g., validation errors are not always specific).
3. Register a New Book

## License:
This project is licensed under the MIT License - see the [Overview](#overview) LICENSE file for details.

## Contributing:
Feel free to fork the repository and contribute by submitting pull requests with any improvements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

---

## Contact Information
**Author: Farhan Tahmid Sabit**
**Email: ftsabit@gmail.com**
**GitHub: https://github.com/FarhanSabit**

---

### **Explanation of the `README.md` Sections:**

- **Overview**: Describes the purpose of the application and its core features.
- **Technologies Used**: Lists the key technologies and frameworks used in the application.
- **Installation**: Step-by-step instructions for setting up and running the application locally.
- **API Endpoints**: Lists the routes, HTTP methods, and example request/response formats.
- **Testing with Postman**: Provides instructions on how to test the API using Postman.
- **Assumptions & Limitations**: Documents key assumptions made during the design and implementation and any limitations in the current version.
- **License**: Specifies the project's license.
- **Contributing**: Information on how others can contribute to the project.
- **Contact Information**: Contact details for the project author.
