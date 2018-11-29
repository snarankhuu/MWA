{
    const http = require('http')
    const url = require('url')
    const { fork } = require('child_process')
    http.createServer((req, res) => {

        const fileName = url.parse(req.url, true).query.url;
        const childProcess = fork('readFile.js')
        console.log('send file')

        childProcess.send(fileName)
        childProcess.on('message', rfile => {
            console.log('readed')
            console.log(rfile)
            res.end(rfile)
        })
    }).listen(4000, () => {
        console.log("Server Started!")
    })
}