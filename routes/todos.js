const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create a new to-do
router.post('/todos', async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: 'Title is required' });
    }
});

// Retrieve all to-dos
router.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Retrieve a specific to-do by ID
router.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Not found' });
        res.json(todo);
    } catch (error) {
        res.status(404).json({ message: 'Invalid ID' });
    }
});

// Update a specific to-do by ID
router.put('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!todo) return res.status(404).json({ message: 'Not found' });
        res.json(todo);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID or missing fields' });
    }
});

// Delete a specific to-do by ID
router.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'To-do item deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: 'Invalid ID' });
    }
});

module.exports = router;
