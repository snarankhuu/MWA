{
    const { resolve4 } = require('dns');
    const { promisify } = require('util');
    const hostname = "www.mum.edu";

    const resolve4Async = promisify(resolve4);
    
    async function asyncF(){
        try {
            const addr = await resolve4Async(hostname);
            console.log(`async/await: ${addr}`)
        } catch (error) {
            console.log(`async/await error: ${error}`)
        }
    }
    
    resolve4(hostname, (err, addr) => {
        console.log(`Callback: ${addr}`);
    });

    resolve4Async(hostname).then((addr) => { console.log(`Promise: ${addr}`) })
                           .catch((err)=>{console.log(`Promise error: ${err}`) })

    asyncF();

}