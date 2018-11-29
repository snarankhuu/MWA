{
    const fs = require('fs')
    const path = require('path')
    process.on('message', (fileName) => {
        console.log('read file')
        fs.readFile(path.resolve(__dirname + "/" +fileName), (err, rfile) => {
            if (err) console.log(err)
            process.send(rfile)
        })


    })
}