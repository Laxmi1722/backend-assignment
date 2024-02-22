const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mysql_user',
  password: 'mysql_password',
  database: 'ecommerce'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware for authentication
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
};

// API Endpoints

// User Registration
app.post('/api/register', (req, res) => {
  // Handle user registration
  // For simplicity, skipping user registration logic
  res.json({ message: 'User registered successfully' });
});

// User Login
app.post('/api/login', (req, res) => {
  // Handle user login
  // For simplicity, skipping user login logic
  const token = jwt.sign({ id: 'user_id' }, 'secret_key');
  res.json({ token });
});

// Category Listing
app.get('/api/categories', (req, res) => {
  connection.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Product Listing
app.get('/api/products', (req, res) => {
  const categoryId = req.query.categoryId;
  connection.query('SELECT * FROM products WHERE categoryId = ?', [categoryId], (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Product Details
app.get('/api/products/:productId', (req, res) => {
  const productId = req.params.productId;
  connection.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
    if (err) {
      console.error('Error fetching product details:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(results[0]);
  });
});

// Cart Management Endpoints

// Add Product to Cart
app.post('/api/cart/add', authenticateUser, (req, res) => {
  // Add product to cart
  // For simplicity, skipping cart management logic
  res.json({ message: 'Product added to cart successfully' });
});

// View Cart
app.get('/api/cart', authenticateUser, (req, res) => {
  // Fetch user's cart items
  // For simplicity, skipping cart management logic
  res.json({ message: 'Fetch user cart items' });
});

// Update Cart Item Quantity
app.put('/api/cart/:productId', authenticateUser, (req, res) => {
  // Update cart item quantity
  // For simplicity, skipping cart management logic
  res.json({ message: 'Cart item quantity updated successfully' });
});

// Remove Product from Cart
app.delete('/api/cart/:productId', authenticateUser, (req, res) => {
  // Remove product from cart
  // For simplicity, skipping cart management logic
  res.json({ message: 'Product removed from cart successfully' });
});

// Order Placement
app.post('/api/orders/place', authenticateUser, (req, res) => {
  // Place order
  // For simplicity, skipping order placement logic
  res.json({ message: 'Order placed successfully' });
});

// Order History
app.get('/api/orders', authenticateUser, (req, res) => {
  // Fetch user's order history
  // For simplicity, skipping order history logic
  res.json({ message: 'Fetch user order history' });
});

// Order Details
app.get('/api/orders/:orderId', authenticateUser, (req, res) => {
  // Fetch order details
  // For simplicity, skipping order details logic
  res.json({ message: 'Fetch order details' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
