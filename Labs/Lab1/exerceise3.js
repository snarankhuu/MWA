{
    const applyCoupon1 = (i) => (d) => {const price = i.price - i.price * d / 100; return {price: price}; }
    
    function applyCoupon(i) {
        return function (d) { i.price = i.price - i.price * d / 100; return i; };
    };
    const item = {
        name: 'Biscuits',
        type: 'Regular',
        category: 'Food',
        price: 200
    }
    console.log(applyCoupon1(item)(10).price === 180);
    console.log(applyCoupon(item)(10).price === 180);
    
}
