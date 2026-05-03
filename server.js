const express = require('express');
const path = require('path');
const app = express();

// Define the port (hosting providers often provide a PORT env variable)
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: Send index.html for any request that doesn't match a static file
// Useful for Single Page Applications (SPAs)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});