const express = require('express');
const app = express();
const port = 3000;

app.get('/tacos', (req, res) => {
    res.send("GET /TACOS RESPONSE")
})

app.post('/tacos', (req, res) => {
    res.send("POST /TACOS RESPONSE")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})