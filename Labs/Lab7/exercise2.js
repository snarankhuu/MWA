{
    'use strict'

    const express = require('express')
    const MongoClient = require('mongodb').MongoClient
    const crypto = require('crypto')
    const url = 'mongodb://localhost:27017'

    const app = express()

    app.get("/secret", (req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const collection = client.db('homework7').collection('exercise2')
            const decipher = crypto.createDecipher('aes256', 'asaadsaad');

            collection.findOne({}, (err, one) => {
                if (err) throw err
                let decrypted = decipher.update(one.message, 'hex', 'utf8')
                decrypted += decipher.final('utf8')
                res.status(200).json(decrypted)
                client.close();
            })
        })
    })

    app.listen(4000, () => {
        console.log('The server running localhost:4000')
    })

}
