// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("one dollar should be 127", function(){
    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(1.2)).toBe(127.9);
})

test("one yen shloud be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(127.9)).toBe(0.8);
})