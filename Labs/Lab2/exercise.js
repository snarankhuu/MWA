{
    Array.prototype.even = function () {
        setImmediate(() => {
            console.log(this.filter((i) => i % 2 === 0))
        });
    }
    Array.prototype.odd = function () {
        setImmediate(() => {
            console.log(this.filter((i) => i % 2 !== 0))
        });
    }
    console.log('start');
    [1, 2, 3, 4, 5, 6, 7, 8].even();
    [1, 2, 3, 4, 5, 6, 7, 8].odd();
    console.log('end');
}