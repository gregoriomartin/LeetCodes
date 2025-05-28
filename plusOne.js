/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // [ 9 9 9 ] > [ 9 9 10] > [ 9 10 0] > [ 10 0 0 ] > [ 1 0 0 0 ]
    // [ 8 9 9 ] > [ 8 9 10] > [ 8 10 0] > [ 9 0 0 ]
    let i = digits.length - 1;
    while (i >= 0) {
        let current = (digits[i] + 1) % 10;
        digits[i] = current;
        if (current != 0) {
            return digits;
        }
        i--;
    }

    if (digits[0] === 0) {
        digits[digits.length] = 0;
        digits[0] = 1;
    }
    
    return digits;
};

console.log(plusOne([9])); // Output: [1, 0, 0, 0]