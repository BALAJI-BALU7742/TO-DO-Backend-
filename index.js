const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos'); // Import routes

const app = express(); // Initialize Express app

// MongoDB connection string - use environment variable for security
const connectionString = process.env.MONGO_URI || 'mongodb+srv://Balu:Balu%40123@cluster0.i2gep.mongodb.net/todoDB?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Middleware to parse JSON
app.use(express.json());

// Use the todoRoutes for routes starting with /api
app.use('/api', todoRoutes);

// Dynamically assign port or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
