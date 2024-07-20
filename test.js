// receiver.js
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    const webhookData = req.body;

    // Handle the webhook data
    // For example, save it to a database, process it, etc.
    console.log('Received webhook:', webhookData);

    // Respond to acknowledge receipt of the webhook
    res.status(200).send('Webhook received');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
