{
    const MongoClient = require('mongodb').MongoClient
    const express = require('express')
    const cors = require('cors')
    const url = 'mongodb://localhost:27017'

    const app = express()
    app.use(express.json())
    app.use(cors())

    app.get("/", (req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const collection = client.db('homework9').collection('zips')

            collection.aggregate([{ $match: { state: "IA" } }, {
                $project: {
                    _id: 0,
                    zipcode: "$_id"
                }
            }]).toArray((err, docs) => {
                if (err) throw err
                res.status(200).json(docs)
                client.close();
            })
        })
    })
    app.get("/population", (req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const collection = client.db('homework9').collection('zips')

            collection.aggregate([
                { $match: { pop: { $gt: 1000 } } },
                { $project: { _id: 0, zipcode: "$_id" } }]).toArray((err, docs) => {
                    if (err) throw err
                    res.status(200).json(docs)
                    client.close();
                })
        })
    })

    app.get("/city", (req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const collection = client.db('homework9').collection('zips')

            collection.aggregate([{
                $group: {
                    _id: { state: "$state", city: "$city" },
                    countcity: { $sum: 1 }
                }
            },
            {
                $match: {
                    countcity: { $gt: 1 }
                }
            }, {
                $project: {
                    _id: 0,
                    state: "$_id.state",
                    city: "$_id.city",
                    countcity: 1
                }
            }, {
                $sort: {
                    state: 1,
                    city: 1
                }
            }
            ]).toArray((err, docs) => {
                if (err) throw err
                res.status(200).json(docs)
                client.close();
            })
        })
    })


    app.get("/least", (req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const collection = client.db('homework9').collection('zips')

            collection.aggregate([{
                $group: {
                    _id: { state: "$state", city: "$city" },
                    sumpop: { $sum: "$pop" },
                    sum: { $sum: 1 }
                }
            },
            {
                $sort: {
                    sumpop: 1
                }
            }
                , {
                $group: {
                    _id: "$_id.state",
                    city: { $first: "$_id.city" },
                    pop: { $first: "$sumpop" }
                }
            }, {
                $project: {
                    _id: 0,
                    state: "$_id",
                    city: 1,
                    pop: 1
                }
            },
            {
                $sort: {
                    state: 1,
                    city: 1
                }
            }
            ]).toArray((err, docs) => {
                if (err) throw err
                res.status(200).json(docs)
                client.close();
            })
        })
    })

    app.listen(4000, () => {
        console.log('The server running localhost:4000')
    })
}