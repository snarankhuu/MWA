{

    const express = require('express')
    const cors = require('cors')
    const { check, validationResult, param } = require('express-validator/check');
    const morgan = require('morgan')

    let app = express()
    app.use(morgan('common'))
    const jsonParser = express.json()
    const urlencodedParser = express.urlencoded({ extended: true })

    let grades = [{ "id": 1, "name": "Surenkhuu Narankhuu", "course": "cs572", "grade": 100 }]

    app.use(jsonParser)
    app.use(cors())

    app.get("/", (req, res) => {
        res.json(grades)
    })

    app.post("/", [check("id").isNumeric(), check("name").isString()],
        (req, res) => {
            try {
                validationResult(req).throw()
                const grade = req.body;
                grades.push(grade)
                res.status(200).json(grades)
            } catch (error) {
                res.status(422).json("validation");
            }

        })

    app.put("/:id", [param("id").isNumeric(), check("id").isNumeric()], (req, res) => {
        try {
            validationResult(req).throw()
            const id = req.params.id;
            const grade = req.body;
            if (grades.find(g => g.id == id) != undefined) {
                grades = grades.filter(g => g.id != id)
                grades.find(g => g.id == id)
                grades.push(grade)
                res.status(200).json(grades)
            } else {
                res.status(200).json("id doesn't exist")
            }
        } catch (error) {
            res.status(422).json("Put Validation error id must be number")
        }

    })

    app.delete("/:id", [param("id").isNumeric()],
        (req, res) => {
            try {
                validationResult(req).throw()
                const id = req.params.id;
                grades = grades.filter(g => g.id != id)
                res.status(200).json(grades)
            } catch (error) {
                res.status(422).json("Delete Validation error id must be number")
            }

        })

    app.listen(4000, () => {
        console.log('The server running localhost:4000')
    })

}