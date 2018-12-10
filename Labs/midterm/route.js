
const router = require('express').Router();

router.get('/', (req, res, next) => {
    req.cars.find({ status: 0 }).toArray((err, docs) => {
        if (err) return next(err)
        res.status(200).json(docs)
    })

})

router.post('/:id/reserve', (req, res, next) => {
    const carId = parseInt(req.params.id)
    const name = req.body.name
    const license = req.body.license

    req.cars.findOne({ _id: carId },(err, car) => {
      const rid = car.rentalDetails[car.rentalDetails.length-1].reservation_id
      const startMileage =  car.rentalDetails[car.rentalDetails.length-1].endMileage
        req.cars.findOneAndUpdate({ _id: carId }, {
            $set: {status: 0},
            $push: {
                rentalDetails: {
                    "reservation_id": rid + 1,
                    "driverName": name,
                    "license": license,
                    "startMileage": startMileage,
                    "endMileage": null
                }
            }
        }, (err, doc) => {
            if (err) return next(err)
            res.status(202).json({ "success": true })
        })
    })

});

router.delete('/:id/cancel/:reservation_id', (req, res, next) => {
    req.cars.updateOne({ _id: parseInt(req.params.id) }, {
        $set: { status: 1 },
        $pull: { rentalDetails: { reservation_id: parseInt(req.params.reservation_id) } }
    }, (err, doc) => {
        if (err) return next(err)
        res.status(200).json({ "success": true })
    })

})
module.exports = router;