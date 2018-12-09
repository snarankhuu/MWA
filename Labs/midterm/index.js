const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
const routes = require('./route.js')

const client = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true })
var cars
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    if (!cars) {
        client.connect(e => {
            cars = client.db('usa').collection('cars')
        })
    }
    req.cars = cars
    next()
})

app.use('/cars', routes);

app.use((err, req, resp, next) => {
    var status = err.status || 500;
    resp.status(status).json({ 'error': 'system error occured' });
});

app.listen(4000, () => console.log('server running on port 4000'));