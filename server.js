const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000; // You can change this to another port if needed

// Serve static files
app.use(express.static('public'));

// API endpoint to fetch country data
app.get('/api/country', async (req, res) => {
    const countryName = req.query.name;
    if (!countryName) {
        return res.status(400).json({ error: 'Country name is required' });
    }

    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        res.json(response.data[0]);
    } catch (error) {
        res.status(404).json({ error: 'Country not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});