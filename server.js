const express = require('express');
const axios = require('axios');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const axiosRetry = require('axios-retry');
require('dotenv').config();

console.log('axiosRetry:', axiosRetry); // Add this to see what’s imported

const app = express();
const PORT = process.env.PORT || 3000;

// Configure axios retry
axiosRetry(axios, {
    retries: 3,
    retryDelay: (retryCount) => retryCount * 2000,
    retryCondition: (error) => error.response?.status === 429
});

// Rest of your code...
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 20,
    message: { error: 'Too many requests. Please wait a minute.' }
});

app.use('/api/chat', limiter);

const AI_API_URL = 'https://api.openai.com/v1/chat/completions';
const AI_API_KEY = process.env.AI_API_KEY;

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    try {
        const response = await axios.post(
            AI_API_URL,
            {
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are a helpful AI assistant.' },
                    { role: 'user', content: message }
                ],
                max_tokens: 150,
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer ${AI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        const aiResponse = response.data.choices[0].message.content;
        res.json({ reply: aiResponse });
    } catch (error) {
        console.error('Error calling AI API:', error.message);
        if (error.response && error.response.status === 429) {
            return res.status(429).json({ error: 'Rate limit exceeded. Retrying... please wait.' });
        }
        res.status(500).json({ error: 'Failed to get response from AI' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});