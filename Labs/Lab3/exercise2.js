{
    const http = require("http")
    const fs = require("fs")
    const path = require('path')

    http.createServer( (req,res)=>{
        var rs = fs.createReadStream(path.resolve(__dirname,"big.txt")).pipe(res)
       
    }).listen(1234, ()=>{console.log('Server started! 1234') });

    http.createServer( (req,res)=>{
        var rs = fs.readFileSync(path.resolve(__dirname,"big.txt"), 'utf8')
        res.end(rs)
    }).listen(2000, ()=>{console.log('Server started! 2000') });

}   