// routes/api.js
import express from 'express';
const router = express.Router();

// Import necessary functions
import { createRestaurant, deleteRestaurant } from '../data/restaurants.js';

// Create a new restaurant
router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body;
    console.log('Received New Restaurant Data:', newRestaurant);
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant);
});

// Delete a restaurant by ID
router.delete('/restaurants/:id', (req, res) => {
    const id = req.params.id;
    const success = deleteRestaurant(id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).send('Restaurant not found');
    }
});

export { router as backendRouter };
