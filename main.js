// sender.js
const express = require('express');
const axios = require('axios');

// Create an instance of Express
const app = express();
const port = 4000; // Port for Service A

// The URL of the webhook receiver
const webhookUrl = 'http://localhost:3000/webhook';

// Endpoint to trigger the webhook with a custom message
app.get('/trigger-webhook', async (req, res) => {
    const customMessage = req.query.message;

    if (!customMessage) {
        return res.status(400).send('Please provide a custom message using the "message" query parameter.');
    }

    const data = {
        message: customMessage,
        timestamp: new Date().toISOString(),
    };

    try {
        const response = await axios.post(webhookUrl, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Webhook sent:', response.data);
        res.status(200).send('Webhook sent successfully!');
    } catch (error) {
        console.error('Error sending webhook:', error);
        res.status(500).send('Error sending webhook');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Service A is running on http://localhost:${port}`);
});
