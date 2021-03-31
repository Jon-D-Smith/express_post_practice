const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/tacos', (req, res) => {
    res.render('tacos');
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})