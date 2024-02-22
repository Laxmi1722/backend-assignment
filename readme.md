# E-Commerce Backend API

This project implements a backend API for an e-commerce platform using Node.js, Express, and MySQL. The API provides various endpoints for user authentication, category and product management, cart management, order placement, and order history.

## Features

- User Registration: Register new users with the system.
- User Login: Authenticate users and generate JSON Web Tokens (JWT) for authentication.
- Category Listing: Retrieve a list of categories.
- Product Listing: Retrieve a list of products based on category ID.
- Product Details: Fetch detailed information about a specific product.
- Cart Management: Allow users to add, view, update, and remove items from their cart.
- Order Placement: Place orders with products from the user's cart.
- Order History: Fetch the order history for authenticated users.
- Order Details: Retrieve detailed information about a specific order.

## Setup

1. **Install Dependencies**: Run `npm install` to install all required dependencies.

2. **Database Configuration**: Update the MySQL database configuration in `server.js` with your own credentials.

3. **Database Schema**: Import the provided SQL schema file (`schema.sql`) into your MySQL database to create the necessary tables.

4. **Start the Server**: Run `npm start` to start the server. By default, the server will run on port 3000.

## Usage

- Register a new user: Send a POST request to `/api/register` with the required user details.
- Log in: Send a POST request to `/api/login` with user credentials to obtain a JWT.
- Use the obtained JWT in the Authorization header for accessing protected endpoints.
- Explore the various API endpoints for category listing, product listing, cart management, order placement, and order history.

## Endpoints

- User Authentication:
  - `POST /api/register`: Register a new user.
  - `POST /api/login`: Log in and obtain a JWT.

- Categories:
  - `GET /api/categories`: Retrieve a list of categories.

- Products:
  - `GET /api/products`: Retrieve a list of products based on category ID.
  - `GET /api/products/:productId`: Fetch detailed information about a specific product.

- Cart Management:
  - `POST /api/cart/add`: Add a product to the user's cart.
  - `GET /api/cart`: View the user's cart.
  - `PUT /api/cart/:productId`: Update the quantity of a product in the cart.
  - `DELETE /api/cart/:productId`: Remove a product from the cart.

- Order Management:
  - `POST /api/orders/place`: Place an order with products from the user's cart.
  - `GET /api/orders`: Fetch the order history for the authenticated user.
  - `GET /api/orders/:orderId`: Retrieve detailed information about a specific order.

## Error Handling

- Proper error handling is implemented for various scenarios, and meaningful error messages are returned along with appropriate HTTP status codes.

## Security

- User authentication is implemented using JSON Web Tokens (JWT).
- Authentication middleware is used to secure sensitive API endpoints, ensuring that only authenticated users can access them.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or additional features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
