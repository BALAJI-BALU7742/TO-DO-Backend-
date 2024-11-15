const express = require('express');          // Import Express once
const mongoose = require('mongoose');         // Import Mongoose once
const todoRoutes = require('./routes/todos'); // Import routes

const app = express();                        // Initialize Express app

// MongoDB connection string
const connectionString = 'mongodb+srv://Balu:Balu%40123@cluster0.i2gep.mongodb.net/todoDB?retryWrites=true&w=majority';

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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
