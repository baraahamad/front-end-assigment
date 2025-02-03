const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Use built-in JSON parsing

// Directly set the API keys in the server.js file
const aylienAPIKey = '53adaf61978db729dc45a54d12be27f0';
const aylienAppID = 'aab74707';

// Ensure API keys are loaded
if (!aylienAPIKey || !aylienAppID) {
    console.error("❌ Missing API credentials! Please check your API keys.");
    process.exit(1);
}

// Root route
app.get('/', (req, res) => {
    res.send("This is the server API page. Access its services via the client app.");
});

// POST Route for text analysis
app.post('/api/analyze', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Text is required for analysis." });
    }

    try {
        const response = await axios.post(
            'https://api.aylien.com/api/v1/sentiment', // Update this if needed
            { text: text },
            {
                headers: {
                    'X-AYLIEN-TextAPI-Application-Key': aylienAPIKey,
                    'X-AYLIEN-TextAPI-Application-ID': aylienAppID
                }
            }
        );

        res.json({
            polarity: response.data.polarity, // e.g., "positive" or "negative"
            subjectivity: response.data.subjectivity, // e.g., "subjective" or "objective"
            text: response.data.text || text, // Return analyzed text or input text
        });
    } catch (error) {
        console.error("❌ API Request Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to analyze text. Try again later." });
    }
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
