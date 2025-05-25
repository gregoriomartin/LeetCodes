/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    for (let i = 0; s.length > i; i++) {
        let next = 0;
        let result = 0;
        let current = romanNumbers[s[i]];

        if (i + 1 < s.length) {
            next = romanNumbers[s[i + 1]];
        }

        if (current < next) {
            result = next - current;
        }
        else {
            result = current;
        }

        total = total + result;
    }
    return total;
};

console.log(romanToInt("MCMXCIV")); // 1994