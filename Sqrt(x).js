/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // 8 > 2 * 2 = 4 < 8 | 3 * 3 = 9 > 8
    // 19
    let left = 0;
    let right = x / 2; // 16 / 2 = 8
    let mid;
    // mid * mid = x
    while (left <= right) {
        mid = Math.floor((left + right) / 2); // 4
        const square = mid * mid; // 16

        if (square === x) break; // no

        if (x > square) { // 8 > 4
            const nextMid = (mid + 1) * (mid + 1);
            if (nextMid > x) { // 3 * 3 = 9 > 8
                break;
            }

            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return mid;
};

console.log(mySqrt(2219)); // Output: 2