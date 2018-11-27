{
    const str = "The MWA is awesome";

    function filterWords(arr) {
        let ret = this
        arr.map(s => ret = ret.replace(s, "***"));
        return ret;
    };

    String.prototype.filterWords = filterWords;

    function promise(arr) {
        return new Promise(res => {
            setTimeout(() => res(str.filterWords(arr)), 1000);
        });
    }

    async function async(arr) {
        const filteredWords = await promise(arr);
        console.log(`Async/await: ${filteredWords}`);
    }

    const { from } = require('rxjs');
    const { map } = require('rxjs/operators');
    function observable(arr) {
        let ss = str;
        return from(arr).pipe(map((a)=>{ return ss = ss.replace(a, "***");  }));
    }


    const arr = ['MWA', 'awesome'];

    //es6
    console.log(`es6: ${str.filterWords(arr)}`);

    //Promise
    promise(arr)
        .then(res => console.log(`Promise: ${res}`))
        .catch(err => console.log(err));

    //async
    async(arr);

    //Observable
    observable(arr).subscribe(i => console.log(`Observable: ${i}`));

}



