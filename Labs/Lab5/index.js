{
    const axios = require('axios')
    const express = require('express')
    const { Observable } = require('rxjs')
    const app = express()

    app.set('x-powered-by', false)
    app.set('trust proxy', true)
    app.set('strict routing', true)
    app.set('case sensitive routing', true)

    function getDataObservable(res) {
        Observable.create(observer => {
            axios.get('https://randomuser.me/api/?results=10')
                .then(({ data }) => {
                    observer.next(data)
                    observer.complete()
                })
                .catch(e => observer.error(e))

        }).subscribe(
            x => {
               return res.write(render(x, 'Observable'))
            },
            e => { console.log(e) },
            () => { console.log('Observable Complete') }
        )
    }

    function getDataPromise(res) {
        axios.get('https://randomuser.me/api/?results=10').then(({ data }) => {
            return res.write(render(data, 'promise'))
        }).catch(err => {
            console.log(err)
        })
    }

    async function getDataAsync(res) {
        try {
            const { data } = await axios.get('https://randomuser.me/api/?results=10')
            return res.write(render(data, 'async/await'))

        } catch (error) {
            console.log(err)
        }
    }

    function render(users, name) {
        const divs = users.results.map(user => `<div>${user.name.first} ${user.name.last}, ${user.email}</div>`).join(" ")
        return `<div> <strong>${name}</strong></div> ${divs}`
    }

    app.get('/users', (req, res) => {
        res.set({
            "Cache-Control": "private, max-age: 86400"
            // , "Content-type": "text/html"
        })
        getDataAsync(res)
        getDataPromise(res)
        getDataObservable(res)
        setTimeout(()=> res.end(), 3000)
    })



    app.listen(4000, () => {
        console.log('The server running localhost:4000')
    })


}