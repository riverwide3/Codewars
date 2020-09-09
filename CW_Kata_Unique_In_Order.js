const assert = require('assert');

var uniqueInOrder = function(iterable_1){
    //your code here - remember iterable can be a string or an array
    let resultArray = [];

    for (let i = 0; i < iterable_1.length; i++) {
        if (iterable_1[i] !== iterable_1[i + 1]) {
            resultArray.push(iterable_1[i]);      }
    }
    return resultArray;
}


//testing

try {
    let iterable_1 = 'AAAABBBCCDAABBB';
    assert.strictEqual(uniqueInOrder(iterable_1), ['A', 'B', 'C', 'D', 'A', 'B']);    
    
    console.log('Passed')
} catch (err) {
    console.log(err.message);
}