{
    const fs = require('fs')
    const path = require('path')
    process.on('message', (fileName) => {
        console.log('reading file in childprocess')
        fs.readFile(path.resolve(__dirname + "/" + fileName), 'utf8', (err, rfile) => {
            if (err) console.log(err)
            process.send(rfile)
        })


    })
}