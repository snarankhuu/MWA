{
    const axios = require('axios')
    const express = require('express')
    const app = express()

    const promise = () => {
            return axios.get('https://randomuser.me/api/?results=1')
    }

    function getDataPromise() {
        return promise().then(result => {
            //   console.log(result.data)
            return result.data
        })
            .catch(err => {
                //       console.error(err);
                throw err
            })
    }
    async function getDataA() {
        try {
            return await promise()
        } catch (error) {
            
        }
      
    }

    app.get('/', (req, res) => {
        res.status(200).set({ "Content-type": "text/html" }).send("Welcome").end()
    })
    app.get('/users', (req, res) => {
        let data = getDataA()
        console.log(data)
     //   console.log(getDataPromise())
        res.status(200).set({ 'Content-Type': 'application/json' }).send(data).end()
    })

    app.set('x-powered-by', false)
    app.set('trust proxy', true)
    app.set('strict routing', true)
    app.set('case sensitive routing', true)

    app.listen(4000, () => {
        console.log('The server running localhost:4000')
    })


}