const assert = require('assert');

function findOdd(A) {
    let n = 0
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            //type coercion cuz numbers
            if (A[i] == A[j]) {
                n++;
            }
        }
        if (n % 2) {
            return A[i];
        }
    }
    return 0;
}

let A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

// Testing
try {    
    assert.strictEqual(findOdd(A), 5);
    console.log('Passed');
} catch (error) {
    console.log(error.message);
}