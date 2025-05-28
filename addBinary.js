/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // 10 10 > 100
    let i = a.length - 1;
    let j = b.length - 1;
    let sum = '';
    let carry = 0;
    while (j >= 0 || i >= 0 || carry === 1) {
        let currentA = i >= 0 ? parseInt(a[i]) : 0;
        let currentB = j >= 0 ? parseInt(b[j]) : 0;
        const total = currentA + currentB + carry;

        if (total === 3) {
            sum = '1' + sum;
            carry = 1;
        }
        else if (total === 2) {
            sum = '0' + sum;
            carry = 1;
        }
        else if (total === 1) {
            sum = '1' + sum;
            carry = 0;
        }
        else {
            sum = '0' + sum;
            carry = 0;
        }
        i--;
        j--;
    }

    return sum;
};
                       
console.log(addBinary("101010", "1011")); // Output: "110101"