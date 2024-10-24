import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantData from './data/restaurants.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route for the home page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the attractions page
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// Serve the restaurants page dynamically
app.get('/restaurants', (req, res) => {
    res.render('restaurants', { restaurants: restaurantData.restaurantData });
});

// Handle form submission
app.post('/add-restaurant', (req, res) => {
    const { name, phone, address, photo } = req.body;
    console.log('New Restaurant Data:', { name, phone, address, photo });
    res.send('Restaurant added successfully!');  // For now, just send a simple response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
