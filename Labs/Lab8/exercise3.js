{
    const MongoClient = require('mongodb').MongoClient
    const express = require('express')
    const cors = require('cors')
    const url = 'mongodb://localhost:27017'

    const app = express()
    app.use(express.json())
    app.use(cors())


    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        const restaurants = client.db('homework8').collection('locations')
        restaurants.updateOne({ _id: 1 }, { $set: { name: "Chinese Buffet", category: "restaurant", location: [-91.9694827, 41.0064007] } }, { upsert: true })
        restaurants.updateOne({ _id: 2 }, { $set: { name: "Pizza Ranch", category: "restaurant", location: [-91.9771927, 41.0067449] } }, { upsert: true })
        restaurants.updateOne({ _id: 3 }, { $set: { name: "The Coffee League", category: "house", location: [-91.9553431, 41.0061574] } }, { upsert: true })
        restaurants.updateOne({ _id: 4 }, { $set: { name: "Everybody's Whole Foods", category: "natural goods store", location: [-91.9646879, 41.0122491] } }, { upsert: true })
        restaurants.updateOne({ _id: 5 }, { $set: { name: "Logli's Store", category: "Convenience store", location: [-91.9682197, 41.0127926] } }, { upsert: true })
        restaurants.updateOne({ _id: 6 }, { $set: { name: "Reiff Grain & Feed Inc", category: "Animal feed store", location: [-91.9675096, 41.0268738] } }, { upsert: true })
        restaurants.updateOne({ _id: 7 }, { $set: { name: "Best Western Fairfield Inn", category: "hostel", location: [-91.9865888, 41.0056741] } }, { upsert: true })
        restaurants.updateOne({ _id: 8 }, { $set: { name: "Casey's General Store", category: "Pizza restaurant", location: [-91.9833373, 41.0068916] } }, { upsert: true })
        //{ "name": "Golden Dome Market and Cafe", "category": "Health food store", "location": [-91.9636311, 41.0232502] }
        client.close()
    })

    app.post("/", (req, res) => {
        const location = req.body;

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const restaurants = client.db('homework8').collection('locations')
            restaurants.insertOne(location, (err, r) => {
                if (err) return console.log(err)
                res.status(200).send(r)
                client.close()
            })
        })
    })

    app.get("/", (req, res) => {
        const q = req.params.query
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const restaurants = client.db('homework8').collection('locations')
            restaurants.find({}).toArray((err, doc) => {
                if (err) return console.log(err)
                res.status(200).send(doc)
                client.close()
            })
        })
    })

    app.get("/near", (req, res) => {

        const mylocation = [-91.967331, 41.022947]

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const restaurants = client.db('homework8').collection('locations')
            restaurants.createIndex({ location: '2d' })
            restaurants.find({ location: { $near: mylocation } }).limit(3).toArray((err, doc) => {
                if (err) return console.log(err)
                res.status(200).send(doc)
                client.close()
            })
        })
    })

    app.listen(4000, () => {
        console.log('The server running localhost:4000')
    })



}