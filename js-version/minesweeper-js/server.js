const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, 'src')));

// Route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Minesweeper server is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎮 Minesweeper server is running on http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${path.join(__dirname, 'src')}`);
});
