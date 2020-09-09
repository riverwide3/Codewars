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
        console.log(n)
        if (n % 2 !== 0) {
            return A[i];
        }
    }
    return 0;
    
}

// Testing
try {
    let A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
    let B = [4, 2, 6, 4, 6, 2, 6];
    let C = [2, 5, 1, 2, 5, 1];
    assert.strictEqual(findOdd(A), 5);
    assert.strictEqual(findOdd(B), 6);
    assert.strictEqual(findOdd(C), 0);
    
    
    console.log('Passed');
} catch (error) {
    console.log(error.message);
}
