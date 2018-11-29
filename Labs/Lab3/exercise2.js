{
    const http = require("http")
    const fs = require("fs")
    const path = require('path')

    http.createServer( (req,res)=>{
        var rs = fs.createReadStream(path.resolve(__dirname,"big.txt")).pipe(res)
        calcMemory('memory used async')
    }).listen(1234, ()=>{console.log('Server started! 1234') });

    http.createServer( (req,res)=>{
        var rs = fs.readFileSync(path.resolve(__dirname,"big.txt"), 'utf8')
        res.end(rs)
        calcMemory('memory used sync')
    }).listen(2000, ()=>{console.log('Server started! 2000') });

    function calcMemory(str){
        console.log(str)
        const used = process.memoryUsage();
        for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
        }
    }
}   

