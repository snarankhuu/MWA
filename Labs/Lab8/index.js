{
    const MongoClient = require('mongodb').MongoClient
    const app = require('express')()
    const url = 'mongodb://localhost:27017'

    app.get("/:query", (req, res) => {
        const q = req.params.query
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            const restaurants = client.db('homework8').collection('restaurants')
            switch (q) {
                case "1":
                    // restaurants.find({}).forEach((doc) => {
                    //     res.status(200).send(doc)
                    // })
                    restaurants.find({}).toArray((err, doc) => {
                        if (err) return console.log(err)
                        res.status(200).send(doc)
                        client.close()
                    })
                    break
                case "2":
                    restaurants.find({}).project({ restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "3":
                    restaurants.find({}).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "4":
                    restaurants.find({}).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, "address.zipcode": 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "5":
                    restaurants.find({ district: "Bronx" }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "6":
                    restaurants.find({ district: "Bronx" }).limit(5).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "7":
                    restaurants.find({ district: "Bronx" }).skip(5).limit(5).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "8":
                    restaurants.find({ "address.coord": { $lt: -95.754168 } }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "9":
                    restaurants.find({ cuisine: { $ne: "American " }, "grades.grade": { $gte: "C" }, "address.coord": { $lt: -65.754168 } }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "10":
                    // restaurants.createIndex({ name: "text" }) //  $text: { $search: "Wil" }
                    restaurants.find({ name: { $regex: /^Wil/ } }).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "11":
                    // restaurants.createIndex({ name: "text" }) //  $text: { $search: "Wil" }
                    restaurants.find({ name: { $regex: /ces$/ } }).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "12":
                    // restaurants.createIndex({ name: "text" }) //  $text: { $search: "Wil" }
                    restaurants.find({ name: { $regex: /Reg/ } }).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "13":
                    restaurants.find({ district: "Bronx", cuisine: { $in: ["American ", "Chinese"] } }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "14":
                    restaurants.find({ district: { $in: ["Bronx", "Staten Island", "Queens", "Brooklyn"] } }).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "15":
                    restaurants.find({ district: { $nin: ["Bronx", "Staten Island", "Queens", "Brooklyn"] } }).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "16":
                    restaurants.find({ "grades.score": { $lte: 10 } }).project({ _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "17":
                    restaurants.find({ "address.coord": { $elemMatch: { $gt: 42, $lt: 52 } } }).project({ _id: 0, restaurant_id: 1, address: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break

                case "18":
                    restaurants.find({}).project({ _id: 0, name: 1 }).sort({ name: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break

                case "19":
                    restaurants.find({}).project({ _id: 0, name: 1 }).sort({ name: -1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "20":
                    restaurants.find({}).project({ _id: 0, name: 1, cuisine: 1, district: 1 }).sort({ cuisine: 1, district: -1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "21":
                    restaurants.find({ "address.street": { $exists: false } }).project({ _id: 0, name: 1, address: 1 }).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
                case "22":
                    restaurants.find({ "address.coord": { $exists: true, $size: 2 } }).count((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.json(docs)
                        client.close()
                    })
                    break
                case "23":
                    restaurants.find({ name: { $regex: /^Mad/ } }).project({ _id: 0, name: 1, district: 1, cuisine: 1, "address.coord": 1}).limit(10).toArray((err, docs) => {
                        if (err) return console.log(err)
                        console.log(docs)
                        res.status(200).send(docs)
                        client.close()
                    })
                    break
            }

        })
    })

    app.listen(4000, () => {
        console.log('The server running localhost:4000')
    })

}