const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const apiUrl = 'http://18.141.180.165:80/search';  // Địa chỉ HTTP API
        const response = await axios({
            method: 'post',
            url: apiUrl,
            headers: req.headers,
            data: req.body,
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error forwarding the request');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy server listening on port ${port}`);
});
